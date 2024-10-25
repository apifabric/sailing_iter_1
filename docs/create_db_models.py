# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float, Table
from sqlalchemy.orm import declarative_base, sessionmaker
import datetime

# Create SQLite database engine
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=False)

# Base class for declarative table definitions
Base = declarative_base()

class Sailboat(Base):
    """
    description: Stores details of the sailboats available at the camp including their model and size.
    """
    __tablename__ = 'sailboats'
    id = Column(Integer, primary_key=True, autoincrement=True)
    model = Column(String, nullable=False)
    size = Column(Float, nullable=False)  # Size in feet

class Instructor(Base):
    """
    description: Contains details of the instructors including names and contact information.
    """
    __tablename__ = 'instructors'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_number = Column(String, nullable=True)

class JuniorCamper(Base):
    """
    description: Lists the junior campers attending the camp along with their emergency contact details.
    """
    __tablename__ = 'junior_campers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    emergency_contact_name = Column(String, nullable=False)
    emergency_contact_phone = Column(String, nullable=False)

class CampPriceList(Base):
    """
    description: Displays the price list for camp attendance options or packages.
    """
    __tablename__ = 'camp_price_list'
    id = Column(Integer, primary_key=True, autoincrement=True)
    package_name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

class ServiceSchedule(Base):
    """
    description: Contains the service schedule for each sailboat, including the last service date.
    """
    __tablename__ = 'service_schedule'
    id = Column(Integer, primary_key=True, autoincrement=True)
    sailboat_id = Column(Integer, ForeignKey('sailboats.id'), nullable=False)
    last_service_date = Column(DateTime, nullable=False)

class MaintenancePerson(Base):
    """
    description: Lists the personnel available for maintaining the sailboats, with their skills.
    """
    __tablename__ = 'maintenance_persons'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    skills = Column(String, nullable=True)

class CampAttendance(Base):
    """
    description: Links each junior camper to their instructor and chosen sailing package.
    """
    __tablename__ = 'camp_attendance'
    id = Column(Integer, primary_key=True, autoincrement=True)
    camper_id = Column(Integer, ForeignKey('junior_campers.id'), nullable=False)
    instructor_id = Column(Integer, ForeignKey('instructors.id'), nullable=False)
    price_list_id = Column(Integer, ForeignKey('camp_price_list.id'), nullable=False)

class BoatMaintenanceAssignment(Base):
    """
    description: Associates maintenance personnel with the specific sailboats they maintain.
    """
    __tablename__ = 'boat_maintenance_assignments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    sailboat_id = Column(Integer, ForeignKey('sailboats.id'), nullable=False)
    maintenance_person_id = Column(Integer, ForeignKey('maintenance_persons.id'), nullable=False)

class SailingEvent(Base):
    """
    description: Defines scheduled sailing events, mentioning the sailboat used and the lead instructor.
    """
    __tablename__ = 'sailing_events'
    id = Column(Integer, primary_key=True, autoincrement=True)
    sailboat_id = Column(Integer, ForeignKey('sailboats.id'), nullable=False)
    instructor_id = Column(Integer, ForeignKey('instructors.id'), nullable=False)
    event_date = Column(DateTime, nullable=False)

class Feedback(Base):
    """
    description: Captures feedback from junior campers about their experience at camp.
    """
    __tablename__ = 'feedback'
    id = Column(Integer, primary_key=True, autoincrement=True)
    camper_id = Column(Integer, ForeignKey('junior_campers.id'), nullable=False)
    comments = Column(String, nullable=True)

class Equipment(Base):
    """
    description: Lists the various equipment available for sailboat activities, linked with boats.
    """
    __tablename__ = 'equipment'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class BoatEquipment(Base):
    """
    description: Links equipment to the sailboats they are associated with.
    """
    __tablename__ = 'boat_equipment'
    id = Column(Integer, primary_key=True, autoincrement=True)
    sailboat_id = Column(Integer, ForeignKey('sailboats.id'), nullable=False)
    equipment_id = Column(Integer, ForeignKey('equipment.id'), nullable=False)

class RacingSchedule(Base):
    """
    description: Organizes regular contests with details about race events and participants.
    """
    __tablename__ = 'racing_schedule'
    id = Column(Integer, primary_key=True, autoincrement=True)
    event_name = Column(String, nullable=False)
    event_date = Column(DateTime, nullable=False)
    sailboat_id = Column(Integer, ForeignKey('sailboats.id'), nullable=False)

# Create all tables
Base.metadata.create_all(engine)

# Creating a session for test data insertion
Session = sessionmaker(bind=engine)
session = Session()

# Sample data insertion
sailboat1 = Sailboat(model="Laser", size=13.5)
sailboat2 = Sailboat(model="Optimist", size=7.5)
session.add_all([sailboat1, sailboat2])

instructor1 = Instructor(name="Alice Smith", contact_number="123-456-7890")
instructor2 = Instructor(name="Bob Brown", contact_number="098-765-4321")
session.add_all([instructor1, instructor2])

camper1 = JuniorCamper(name="Charlie Moore", emergency_contact_name="Sarah Moore", emergency_contact_phone="543-210-6789")
camper2 = JuniorCamper(name="Dana Lee", emergency_contact_name="Thomas Lee", emergency_contact_phone="678-901-1234")
session.add_all([camper1, camper2])

price1 = CampPriceList(package_name="Beginner Sailing", price=300.0)
price2 = CampPriceList(package_name="Advanced Sailing", price=450.0)
session.add_all([price1, price2])

service1 = ServiceSchedule(sailboat_id=1, last_service_date=datetime.datetime(2023, 8, 15))
service2 = ServiceSchedule(sailboat_id=2, last_service_date=datetime.datetime(2023, 8, 20))
session.add_all([service1, service2])

maint_person1 = MaintenancePerson(name="Eve Johnson", skills="Navigation systems, Rigging")
maint_person2 = MaintenancePerson(name="Frank White", skills="Hull repair, Electrical systems")
session.add_all([maint_person1, maint_person2])

attendance1 = CampAttendance(camper_id=1, instructor_id=1, price_list_id=1)
attendance2 = CampAttendance(camper_id=2, instructor_id=2, price_list_id=2)
session.add_all([attendance1, attendance2])

maintenance_assignment1 = BoatMaintenanceAssignment(sailboat_id=1, maintenance_person_id=1)
maintenance_assignment2 = BoatMaintenanceAssignment(sailboat_id=2, maintenance_person_id=2)
session.add_all([maintenance_assignment1, maintenance_assignment2])

event1 = SailingEvent(sailboat_id=1, instructor_id=1, event_date=datetime.datetime(2023, 9, 10))
event2 = SailingEvent(sailboat_id=2, instructor_id=2, event_date=datetime.datetime(2023, 9, 11))
session.add_all([event1, event2])

feedback1 = Feedback(camper_id=1, comments="Amazing experience!")
feedback2 = Feedback(camper_id=2, comments="Had a great time, learned a lot!")
session.add_all([feedback1, feedback2])

equipment1 = Equipment(name="Life Jacket")
equipment2 = Equipment(name="Sail Repair Kit")
session.add_all([equipment1, equipment2])

boat_equipment1 = BoatEquipment(sailboat_id=1, equipment_id=1)
boat_equipment2 = BoatEquipment(sailboat_id=2, equipment_id=2)
session.add_all([boat_equipment1, boat_equipment2])

race1 = RacingSchedule(event_name="Summer Youth Regatta", event_date=datetime.datetime(2023, 9, 15), sailboat_id=1)
race2 = RacingSchedule(event_name="Autumn Challenge", event_date=datetime.datetime(2023, 10, 5), sailboat_id=2)
session.add_all([race1, race2])

# Commit the session
session.commit()

# Close the session
session.close()
