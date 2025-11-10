from supabase_config import get_supabase_client
import logging

logger = logging.getLogger(__name__)

def calculate_priority(budget: str) -> str:
    """Calculate lead priority based on budget"""
    if "£30k+" in budget or "30k+" in budget:
        return "high"
    elif "£15-30k" in budget or "15-30k" in budget:
        return "medium"
    else:
        return "low"

async def create_lead(lead_data: dict) -> dict:
    """Create a new lead in Supabase"""
    try:
        supabase = get_supabase_client()
        
        # Calculate priority
        priority = calculate_priority(lead_data.get('budget', ''))
        
        # Prepare data for Supabase (convert camelCase to snake_case)
        supabase_data = {
            'name': lead_data['name'],
            'company': lead_data['company'],
            'email': lead_data['email'],
            'phone': lead_data['phone'],
            'city': lead_data['city'],
            'project_type': lead_data['projectType'],
            'space_size': lead_data['spaceSize'],
            'budget': lead_data['budget'],
            'timeline': lead_data['timeline'],
            'message': lead_data.get('message', ''),
            'status': 'new',
            'priority': priority
        }
        
        # Insert into Supabase
        response = supabase.table('leads').insert(supabase_data).execute()
        
        if response.data and len(response.data) > 0:
            logger.info(f"Lead created successfully: {response.data[0]['id']}")
            return {
                'success': True,
                'lead_id': response.data[0]['id'],
                'data': response.data[0]
            }
        else:
            logger.error("Failed to create lead: No data returned")
            return {
                'success': False,
                'error': 'Failed to create lead'
            }
            
    except Exception as e:
        logger.error(f"Error creating lead: {str(e)}")
        return {
            'success': False,
            'error': str(e)
        }

async def get_all_leads():
    """Get all leads from Supabase (optional - for admin dashboard)"""
    try:
        supabase = get_supabase_client()
        response = supabase.table('leads').select('*').order('created_at', desc=True).execute()
        
        if response.data:
            return {
                'success': True,
                'leads': response.data,
                'total': len(response.data)
            }
        else:
            return {
                'success': True,
                'leads': [],
                'total': 0
            }
            
    except Exception as e:
        logger.error(f"Error fetching leads: {str(e)}")
        return {
            'success': False,
            'error': str(e)
        }
