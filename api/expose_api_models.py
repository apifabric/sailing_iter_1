from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.BoatEquipment, method_decorators= method_decorators)
    api.expose_object(database.models.Equipment, method_decorators= method_decorators)
    api.expose_object(database.models.Sailboat, method_decorators= method_decorators)
    api.expose_object(database.models.BoatMaintenanceAssignment, method_decorators= method_decorators)
    api.expose_object(database.models.MaintenancePerson, method_decorators= method_decorators)
    api.expose_object(database.models.CampAttendance, method_decorators= method_decorators)
    api.expose_object(database.models.JuniorCamper, method_decorators= method_decorators)
    api.expose_object(database.models.Instructor, method_decorators= method_decorators)
    api.expose_object(database.models.CampPriceList, method_decorators= method_decorators)
    api.expose_object(database.models.Feedback, method_decorators= method_decorators)
    api.expose_object(database.models.RacingSchedule, method_decorators= method_decorators)
    api.expose_object(database.models.SailingEvent, method_decorators= method_decorators)
    api.expose_object(database.models.ServiceSchedule, method_decorators= method_decorators)
    return api
