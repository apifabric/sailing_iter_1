# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 25, 2024 17:37:42
# Database: sqlite:////tmp/tmp.5Dw5ZoxF7M/sailing_iter_1/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class CampPriceList(SAFRSBaseX, Base):
    """
    description: Displays the price list for camp attendance options or packages.
    """
    __tablename__ = 'camp_price_list'
    _s_collection_name = 'CampPriceList'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    package_name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CampAttendanceList : Mapped[List["CampAttendance"]] = relationship(back_populates="price_list")



class Equipment(SAFRSBaseX, Base):
    """
    description: Lists the various equipment available for sailboat activities, linked with boats.
    """
    __tablename__ = 'equipment'
    _s_collection_name = 'Equipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    BoatEquipmentList : Mapped[List["BoatEquipment"]] = relationship(back_populates="equipment")



class Instructor(SAFRSBaseX, Base):
    """
    description: Contains details of the instructors including names and contact information.
    """
    __tablename__ = 'instructors'
    _s_collection_name = 'Instructor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    contact_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CampAttendanceList : Mapped[List["CampAttendance"]] = relationship(back_populates="instructor")
    SailingEventList : Mapped[List["SailingEvent"]] = relationship(back_populates="instructor")



class JuniorCamper(SAFRSBaseX, Base):
    """
    description: Lists the junior campers attending the camp along with their emergency contact details.
    """
    __tablename__ = 'junior_campers'
    _s_collection_name = 'JuniorCamper'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    emergency_contact_name = Column(String, nullable=False)
    emergency_contact_phone = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CampAttendanceList : Mapped[List["CampAttendance"]] = relationship(back_populates="camper")
    FeedbackList : Mapped[List["Feedback"]] = relationship(back_populates="camper")



class MaintenancePerson(SAFRSBaseX, Base):
    """
    description: Lists the personnel available for maintaining the sailboats, with their skills.
    """
    __tablename__ = 'maintenance_persons'
    _s_collection_name = 'MaintenancePerson'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    skills = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    BoatMaintenanceAssignmentList : Mapped[List["BoatMaintenanceAssignment"]] = relationship(back_populates="maintenance_person")



class Sailboat(SAFRSBaseX, Base):
    """
    description: Stores details of the sailboats available at the camp including their model and size.
    """
    __tablename__ = 'sailboats'
    _s_collection_name = 'Sailboat'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    model = Column(String, nullable=False)
    size = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    BoatEquipmentList : Mapped[List["BoatEquipment"]] = relationship(back_populates="sailboat")
    BoatMaintenanceAssignmentList : Mapped[List["BoatMaintenanceAssignment"]] = relationship(back_populates="sailboat")
    RacingScheduleList : Mapped[List["RacingSchedule"]] = relationship(back_populates="sailboat")
    SailingEventList : Mapped[List["SailingEvent"]] = relationship(back_populates="sailboat")
    ServiceScheduleList : Mapped[List["ServiceSchedule"]] = relationship(back_populates="sailboat")



class BoatEquipment(SAFRSBaseX, Base):
    """
    description: Links equipment to the sailboats they are associated with.
    """
    __tablename__ = 'boat_equipment'
    _s_collection_name = 'BoatEquipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    sailboat_id = Column(ForeignKey('sailboats.id'), nullable=False)
    equipment_id = Column(ForeignKey('equipment.id'), nullable=False)

    # parent relationships (access parent)
    equipment : Mapped["Equipment"] = relationship(back_populates=("BoatEquipmentList"))
    sailboat : Mapped["Sailboat"] = relationship(back_populates=("BoatEquipmentList"))

    # child relationships (access children)



class BoatMaintenanceAssignment(SAFRSBaseX, Base):
    """
    description: Associates maintenance personnel with the specific sailboats they maintain.
    """
    __tablename__ = 'boat_maintenance_assignments'
    _s_collection_name = 'BoatMaintenanceAssignment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    sailboat_id = Column(ForeignKey('sailboats.id'), nullable=False)
    maintenance_person_id = Column(ForeignKey('maintenance_persons.id'), nullable=False)

    # parent relationships (access parent)
    maintenance_person : Mapped["MaintenancePerson"] = relationship(back_populates=("BoatMaintenanceAssignmentList"))
    sailboat : Mapped["Sailboat"] = relationship(back_populates=("BoatMaintenanceAssignmentList"))

    # child relationships (access children)



class CampAttendance(SAFRSBaseX, Base):
    """
    description: Links each junior camper to their instructor and chosen sailing package.
    """
    __tablename__ = 'camp_attendance'
    _s_collection_name = 'CampAttendance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    camper_id = Column(ForeignKey('junior_campers.id'), nullable=False)
    instructor_id = Column(ForeignKey('instructors.id'), nullable=False)
    price_list_id = Column(ForeignKey('camp_price_list.id'), nullable=False)

    # parent relationships (access parent)
    camper : Mapped["JuniorCamper"] = relationship(back_populates=("CampAttendanceList"))
    instructor : Mapped["Instructor"] = relationship(back_populates=("CampAttendanceList"))
    price_list : Mapped["CampPriceList"] = relationship(back_populates=("CampAttendanceList"))

    # child relationships (access children)



class Feedback(SAFRSBaseX, Base):
    """
    description: Captures feedback from junior campers about their experience at camp.
    """
    __tablename__ = 'feedback'
    _s_collection_name = 'Feedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    camper_id = Column(ForeignKey('junior_campers.id'), nullable=False)
    comments = Column(String)

    # parent relationships (access parent)
    camper : Mapped["JuniorCamper"] = relationship(back_populates=("FeedbackList"))

    # child relationships (access children)



class RacingSchedule(SAFRSBaseX, Base):
    """
    description: Organizes regular contests with details about race events and participants.
    """
    __tablename__ = 'racing_schedule'
    _s_collection_name = 'RacingSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    event_name = Column(String, nullable=False)
    event_date = Column(DateTime, nullable=False)
    sailboat_id = Column(ForeignKey('sailboats.id'), nullable=False)

    # parent relationships (access parent)
    sailboat : Mapped["Sailboat"] = relationship(back_populates=("RacingScheduleList"))

    # child relationships (access children)



class SailingEvent(SAFRSBaseX, Base):
    """
    description: Defines scheduled sailing events, mentioning the sailboat used and the lead instructor.
    """
    __tablename__ = 'sailing_events'
    _s_collection_name = 'SailingEvent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    sailboat_id = Column(ForeignKey('sailboats.id'), nullable=False)
    instructor_id = Column(ForeignKey('instructors.id'), nullable=False)
    event_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    instructor : Mapped["Instructor"] = relationship(back_populates=("SailingEventList"))
    sailboat : Mapped["Sailboat"] = relationship(back_populates=("SailingEventList"))

    # child relationships (access children)



class ServiceSchedule(SAFRSBaseX, Base):
    """
    description: Contains the service schedule for each sailboat, including the last service date.
    """
    __tablename__ = 'service_schedule'
    _s_collection_name = 'ServiceSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    sailboat_id = Column(ForeignKey('sailboats.id'), nullable=False)
    last_service_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    sailboat : Mapped["Sailboat"] = relationship(back_populates=("ServiceScheduleList"))

    # child relationships (access children)
