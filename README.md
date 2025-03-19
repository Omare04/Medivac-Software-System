# Medivac Mission Management and Deployment project overview 🛩️ 💊
![medivac-app-wireframe](https://github.com/user-attachments/assets/324efedc-66cf-4b9a-8c03-ae2d6c506388)

This project is a comprehensive platform designed to streamline all aspects of medivac missions, including stock management, personnel coordination, purchase order management, and patient data handling. It enables efficient tracking of medical supplies and equipment, facilitates scheduling and management of personnel roles and availability, and allows operators to generate and manage purchase orders seamlessly. Doctors can store and access patient data and medical documentation, ensuring global accessibility for effective patient care. Optionally, a built-in flight tracker provides real-time updates on flight status, enhancing operational efficiency and enabling timely responses to medical emergencies.

**Drug Stock Management**
   - Maintain a list of drugs in stock, each with a unique serial number.
   - Track drug quantities, expiration dates, and notifications for expiry.
   - Allow adjustment of notification settings for drug expiry.
   - Record entry and exit history of drugs, including reasons for removal and who removed them.

**Medical Equipment Stock**
   - Manage medical equipment separately from drugs.
   - Categorize equipment and assign serial numbers.
   - Track equipment entry and exit history, including purpose and personnel involved.

**Drug and Medical Equipment Purchase Orders**
   - Generate POs for drugs and equipment.
   - Record serial numbers upon arrival of items.
   - Include PDF documents for signature and approval.

**Missions**
   - Manage crew information with associated IDs and roles.
   - Create pending lists of required drugs and equipment for missions.
   - Require doctor confirmation for mission-related drugs and equipment.
   - Capture flight details, airport information, and doctor's notes.
   - Gather patient information, evacuation site details, and security assessments.
   - Coordinate transportation logistics and communication plans.
   - Provide contingency plans and backup options for missions.

**Incoming Medical Evac Requests**
   - Receive patient and flight information from insurance companies or hospitals.
   - Forward details to doctors for patient assessment and confirmation.
   - Determine flight feasibility based on logistics and performance parameters.
   - Allow insurance companies to review flight offers in the marketplace.

**Inspection Information**
   - Maintain aircraft disinfection checklist and monitoring.
   - Track disinfection schedules, aircraft registration, and operator signatures.
   - Manage medical equipment inspection dates, operator signatures, and upcoming inspection dates.

**Database Schema**

![medivac-app-ddl-image](https://github.com/user-attachments/assets/103c71b2-4f61-4097-8250-a469a653797d)
