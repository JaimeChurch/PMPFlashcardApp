const Questions = [
    {
        id: 1,
        question: "A project manager is using an S-Curve to reflect the various expenditures of resources over the projected time of the project. This S curve indicates that:",
        choices: [
            { id: "a", text: "The bulk of the project cost is spent during the execution phase" },
            { id: "b", text: "The project follows linear expenditure over all the phases" },
            { id: "c", text: "The project resource cost would be directly proportional to the size of the project" },
            { id: "d", text: "The project has high risk of attrition during execution phase" }
        ],
        answer: "a"
    },
    {
        id: 2,
        question: "Your project is halfway through the execution phase. The project is progressing well and is on schedule when one of the vendors calls you to inform you that there will be a delay in his shipment delivery. Which of the following documents would best capture the impact of the delay on the project schedule?",
        choices: [
            { id: 'a', text: "Network Diagram" },
            { id: 'b', text: "Procurement Management Plan" },
            { id: 'c', text: "Work Breakdown Structure" },
            { id: 'd', text: "Risk Register" }
        ],
        answer: 'a'
    },
    {
        id: 3,
        question: "You have made the final delivery to the customer and your team is in the process of completing administrative and contractual closure. The team has also completed the final version of the lessons learned in corporate database. Which of the following is a critical activity you should complete before formally closing the project?",
        choices: [
            { id: 'a', text: "Confirm that all the requirements in the project are met" },
            { id: 'b', text: "Ensure that all project management processes are complete" },
            { id: 'c', text: "Obtain formal sign-off of the project from the customer" },
            { id: 'd', text: "Index and archive the project records" }
        ],
        answer: 'c'
    },
    {
        id: 4,
        question: "As the project manager you have outsourced a component of your product to a supplier which is due to be delivered next month. You find out that the delivery of the component may be delayed due to political unrest in the vendor's location. What is the BEST you can do in this situation?",
        choices: [
            { id: 'a', text: "Report your senior manager about probable delay along with details on the current political situation at vendor's place" },
            { id: 'b', text: "Communicate to the vendor that any possible delay would lead to a fine (Pönale) and affect future payments" },
            { id: 'c', text: "Revisit your project schedule and look at alternatives to reduce the impact of the delay" },
            { id: 'd', text: "Since there is no official communication from the vendor, you need to use wait and watch policy" }
        ],
        answer: 'c'
    },
    {
        id: 5,
        question: "As a project manager, you are in the process of establishing the total scope of the effort in the project to define the project objectives. For this purpose, you include relevant stakeholders and explore all the aspects of scope, cost, time, risk, quality, etc. Which process group of the project are you currently in?",
        choices: [
            { id: 'a', text: "Initiation" },
            { id: 'b', text: "Planning" },
            { id: 'c', text: "Execution" },
            { id: 'd', text: "Monitor and Control" }
        ],
        answer: 'b'
    },
    {
        id: 6,
        question: "You are managing a project with emerging requirements and evolving scope, which is very complex. The team is currently demonstrating a product increment to your stakeholders to gain feedback on a key functionality of the project’s product. What meeting is the team conducting?",
        choices: [
            { id: 'a', text: "Steering Committee Meeting" },
            { id: 'b', text: "Review Meeting" },
            { id: 'c', text: "Daily Standup Meeting" },
            { id: 'd', text: "Retrospective Meeting" }
        ],
        answer: 'b'
    },
    {
        id: 7,
        question: "As a project manager you have a large team reporting to you with two members working on this technology for the first time. At the beginning of the project, you were concerned that the members wouldn't be able to contribute as much due to the technical complexity of the project. However, you spent time and gave them the required training in order to perform. During your assessment, you find some areas which still require improvement. What should you do next?",
        choices: [
            { id: 'a', text: "Discuss this with the functional manager asking him to assign these resources in some other project as you have already spent enough effort on them" },
            { id: 'b', text: "Give them more challenging assignments so that they fail and you have reasons to expel them from the team" },
            { id: 'c', text: "Assess their current weak areas and provide more focused training with regular feedback" },
            { id: 'd', text: "Call them in your office and give them a warning that this is their last chance to perform in the project" }
        ],
        answer: 'c'
    },
    {
        id: 8,
        question: "You manage an IT project under contract in the final phase of project execution. Your project status is well within the budget and achieving the schedule and quality objectives. During the final testing phase of the project, you realize that the performance of the product can be increased significantly by doing minor code changes in two modules. This change would require some additional days of work. What should you do NEXT?",
        choices: [
            { id: 'a', text: "Analyze the various alternatives and do a detailed impact analysis before proceeding with the change" },
            { id: 'b', text: "Update the change management form and send it to change control board for consideration" },
            { id: 'c', text: "Discuss the change and impact with customer and seek his approval" },
            { id: 'd', text: "Ignore the change as it is gold plating and should be avoided" }
        ],
        answer: 'd'
    },
    {
        id: 9,
        question: "Your project is in the final stages of testing and the team is interacting with the customer on daily basis to update him with the project status and incorporate his feedback. Which of the following would be the most critical process to be followed in this scenario?",
        choices: [
            { id: 'a', text: "Quality Control" },
            { id: 'b', text: "Scope Control" },
            { id: 'c', text: "Report Performance" },
            { id: 'd', text: "Control Risk" }
        ],
        answer: 'b'
    },
    {
        id: 10,
        question: "Your project is halfway through its execution and it is audited. You have a meeting with a stakeholder whose department is responsible for testing. The stakeholder needs information on which corrective actions his department should take to achieve the project’s quality expectations and what are the team’s recommendations for improving the product, processes and the project. For which of the following documents is the stakeholder asking?",
        choices: [
            { id: 'a', text: "Quality management plan" },
            { id: 'b', text: "Checklists" },
            { id: 'c', text: "Performance reports" },
            { id: 'd', text: "Quality reports" }
        ],
        answer: 'd'
    },
    {
        id: 11,
        question: "Looking at the scenario of the previous question, in which project management process are you in?",
        choices: [
            { id: 'a', text: "Manage Project Knowledge" },
            { id: 'b', text: "Monitor and Control Project Work" },
            { id: 'c', text: "Manage Quality" },
            { id: 'd', text: "Control Quality" }
        ],
        answer: 'c'
    },
    {
        id: 12,
        question: "John has been assigned as project manager for an important project. The project charter has been approved by the sponsor and key stakeholders have been identified. What should John do next?",
        choices: [
            { id: 'a', text: "Define the project objectives and success criteria" },
            { id: 'b', text: "Inform stakeholders of the approved charter to ensure a shared understanding of success criteria, key deliverables and milestones" },
            { id: 'c', text: "Define stakeholder management strategy to ensure support for the project" },
            { id: 'd', text: "Start to plan the project" }
        ],
        answer: 'b'
    },
    {
        id: 13,
        question: "You are analyzing a statement of work and discuss the major deliverables with stakeholders. You go through the aspects of the project and document the first project assumptions and constraints. In which of the following documents do you record them?",
        choices: [
            { id: 'a', text: "Scope statement" },
            { id: 'b', text: "Project charter" },
            { id: 'c', text: "Stakeholder analysis" },
            { id: 'd', text: "Assumption log" }
        ],
        answer: 'd'
    },
    {
        id: 14,
        question: "You are a new project manager in a company that develops and markets electronic devices, which accepts only business cases including discounted cash flow analysis. Which of the following project selection methods should you use?",
        choices: [
            { id: 'a', text: "Return on Investment" },
            { id: 'b', text: "Payback Period" },
            { id: 'c', text: "Net Present Value" },
            { id: 'd', text: "Benefit-Cost Ratio" }
        ],
        answer: 'c'
    },
    {
        id: 15,
        question: "As a project manager you are estimating the duration of your project activities using beta distribution. For a particular project activity, your optimistic estimate is 41 days, pessimistic estimate is 77 days and most likely estimate is 53 days. What would be the expected duration and standard deviation of the estimate for this activity?",
        choices: [
            { id: 'a', text: "55/6.00" },
            { id: 'b', text: "110/6.00" },
            { id: 'c', text: "55/4.00" },
            { id: 'd', text: "55/2.00" }
        ],
        answer: 'a'
    },
    {
        id: 16,
        question: "A project manager is in the process of documenting and defining stakeholder's needs to meet project objectives. What is the output of this process?",
        choices: [
            { id: 'a', text: "Stakeholder Register" },
            { id: 'b', text: "Stakeholder Engagement Plan" },
            { id: 'c', text: "Requirements Documentation" },
            { id: 'd', text: "Issue Log" }
        ],
        answer: 'c'
    },
    {
        id: 17,
        question: "As a project manager, you are a firm believer in process and you want to follow the best practices on the project right from the beginning. In this regard, you understand the importance of having a formal kick-off meeting to launch the project with all your key stakeholders including the customer. However, you are worried about the behavior of some of your team members. In the last internal meeting, there was utter chaos with the speaker shouting to be heard while others kept talking amongst themselves and ignoring the speaker. What is the BEST strategy to use to avoid such a situation in the kick-off meeting?",
        choices: [
            { id: 'a', text: "Set objectives of the kick-off meeting clearly, so that all the attendees are aware of the meeting agenda" },
            { id: 'b', text: "Ensure that all the key stakeholders are invited to avoid inviting disinterested people who wouldn't listen to the speaker" },
            { id: 'c', text: "Develop a team charter with common values, guidelines and ground rules and ensure they are followed in all the meetings going forward" },
            { id: 'd', text: "Meet the troublemakers in the team and communicate them the importance of meetings in a project success. Warn them of disciplinary action if they don't oblige" }
        ],
        answer: 'c'
    },
    {
        id: 18,
        question: "A key stakeholder from the quality department wants to know more on how the tailoring of the project management processes was done by the project team. Additionally, he would like to know the rationale for selecting processes, their implementation level details, and how they will be used to manage the interdependencies. Which document should the project manager refer him to?",
        choices: [
            { id: 'a', text: "Work Breakdown Structure" },
            { id: 'b', text: "Project Scope Statement" },
            { id: 'c', text: "Project Management Plan" },
            { id: 'd', text: "Quality Management Plan" }
        ],
        answer: 'c'
    },
    {
        id: 19,
        question: "Once the risks have been identified on the project, the next step is to manage the risks. Of the following, which is NOT a suitable way of managing the risks?",
        choices: [
            { id: 'a', text: "By using existing assets" },
            { id: 'b', text: "By contingency planning" },
            { id: 'c', text: "By investing in new resources" },
            { id: 'd', text: "By Brainstorming" }
        ],
        answer: 'd'
    },
    {
        id: 20,
        question: "You are a project manager and your team is preparing for the internal quality audit cycle. However, you feel that the team is a little apprehensive about the audit process. You decide to give them an overview of the process. Which of the following would be not correct about quality audits?",
        choices: [
            { id: 'a', text: "Quality Audits are used to identify all the best practices implemented in the project" },
            { id: 'b', text: "Quality audits help to share best practices in one project with other projects in the organization" },
            { id: 'c', text: "Quality Audits aim to assess project team effectiveness and suggest improvements" },
            { id: 'd', text: "Quality Audits help to improve process implementation and team productivity" }
        ],
        answer: 'c'
    },
    {
        id: 21,
        question: "A major stakeholder in the project wants to know his role and responsibility in the scheduling process of the project. He also wants to understand how the schedule baseline is established for the project and which scheduling methodologies are used in the project. Which document should the project manager ask him to refer to?",
        choices: [
            { id: 'a', text: "Project Management Plan" },
            { id: 'b', text: "Project Schedule Baseline" },
            { id: 'c', text: "Stakeholder Register" },
            { id: 'd', text: "Schedule Management Plan" }
        ],
        answer: 'd'
    },
    {
        id: 22,
        question: "A project manager working on a construction project identifies a risk of a heavy storm in the coming months which might affect the construction activity. However, he doesn't have any reliable information on the weather forecast or the severity of the storm. In this case, what is the BEST project manager can do?",
        choices: [
            { id: 'a', text: "Capture the Risk in the Risk Register" },
            { id: 'b', text: "Ignore the Risk as nothing can be done to avoid it" },
            { id: 'c', text: "Actively accept the risk and allocate time and cost reserve in contingency plans" },
            { id: 'd', text: "Proceed with Risk Response Strategy to attack the Risk" }
        ],
        answer: 'c'
    },
    {
        id: 23,
        question: "A project manager is working with several stakeholders nominated as risk owners in the risk register. He encourages the risk owners to take necessary actions to execute agreed-upon risk responses. In a meeting with senior management he ensures that an escalated risk is understood and appropriate action will be taken. Which of the following processes the project manager is performing?",
        choices: [
            { id: 'a', text: "Monitor Risks" },
            { id: 'b', text: "Plan Risk Responses" },
            { id: 'c', text: "Manage Project Knowledge" },
            { id: 'd', text: "Implement Risk Responses" }
        ],
        answer: 'd'
    },
    {
        id: 24,
        question: "The method of examining work or a product to determine whether it conforms to documented standards is called?",
        choices: [
            { id: 'a', text: "Inspection" },
            { id: 'b', text: "Statistical Sampling" },
            { id: 'c', text: "Audit" },
            { id: 'd', text: "Verification" }
        ],
        answer: 'a'
    },
    {
        id: 25,
        question: "Which of the following is NOT an advantage of a fixed-price contract?",
        choices: [
            { id: 'a', text: "Less work for buyer to manage" },
            { id: 'b', text: "Seller has a strong incentive to control costs" },
            { id: 'c', text: "Buyer knows the total price at project starts" },
            { id: 'd', text: "Final cost may be more than a cost reimbursable contract because contractors have to increase the price to cover their risk" }
        ],
        answer: 'd'
    },
    {
        id: 26,
        question: "A project manager is currently focused on maintaining the stakeholders’ engagement with the help of the Control Stakeholder Engagement process. The project management plan is a major input to this process. Which of the following content of the project management plan is least likely to be utilized in this process?",
        choices: [
            { id: 'a', text: "Communication management plan" },
            { id: 'b', text: "Resources management plan" },
            { id: 'c', text: "Change management plan" },
            { id: 'd', text: "Selected life cycle for the project and selected project management processes" }
        ],
        answer: 'd'
    },
    {
        id: 27,
        question: "A company just launched a new product in the market. Customers seem to be reluctant to accept it. The company has incurred huge costs in the development of the product including market analysis, research and development, patents, etc. All of these costs are referred to as ____________.",
        choices: [
            { id: 'a', text: "Opportunity Costs" },
            { id: 'b', text: "Depreciation" },
            { id: 'c', text: "Sunk Costs" },
            { id: 'd', text: "Variable Costs" }
        ],
        answer: 'c'
    },
    {
        id: 28,
        question: "You just took over an agile project in its very early phase. After some discussions with the sponsor and major stakeholders, you realize that the target group and main features and benefits of the product are unclear. The stakeholders are in disagreement. What should you do?",
        choices: [
            { id: 'a', text: "Perform a proper stakeholder analysis to identify all stakeholders" },
            { id: 'b', text: "Schedule workshops with focus groups to collect user needs and requirements" },
            { id: 'c', text: "Help the sponsor and stakeholders to craft a product vision and build a product roadmap" },
            { id: 'd', text: "Invite stakeholders to a workshop and use story mapping to create a product backlog together with the team" }
        ],
        answer: 'c'
    },
    {
        id: 29,
        question: "A project manager shares project performance through status reports via email to selected stakeholders of the project. He is using which of the following techniques?",
        choices: [
            { id: 'a', text: "Kick off meeting" },
            { id: 'b', text: "Pull Communication" },
            { id: 'c', text: "Push Communication" },
            { id: 'd', text: "Communication model" }
        ],
        answer: 'c'
    },
    {
        id: 30,
        question: "A project manager is in the process of analyzing activity sequences, durations, resources requirements, and schedule constraints and has created an approved project schedule. What should he do NEXT?",
        choices: [
            { id: 'a', text: "Determine resource requirements for each activity in the project" },
            { id: 'b', text: "Use techniques like Critical Path method, What-if Analysis to calculate optimum duration of the project" },
            { id: 'c', text: "Use this approved schedule duration as a baseline and start tracking the project" },
            { id: 'd', text: "Create a network diagram of the project using one of the diagramming methods" }
        ],
        answer: 'c'
    },
    {
        id: 31,
        question: "You are assigned as a new project manager to a project in the execution stage. Current schedule and performance indices for the project, SPI and CPI are 1.12 and 1.15, and project performance is well within the baseline. The defects found during internal testing for the last deliverable were well below the organization’s limits. However, the customer doesn’t seem to be happy with the project progress. What should be the FIRST thing the project manager should do?",
        choices: [
            { id: 'a', text: "Start managing the project as you gain more insight into day-to-day responsibilities" },
            { id: 'b', text: "Meet with the project team to understand open issues in the project" },
            { id: 'c', text: "Conduct a meeting with the customer to understand his concern over project progress" },
            { id: 'd', text: "Improve project performance to reach SPI and CPI above 1.5" }
        ],
        answer: 'c'
    },
    {
        id: 32,
        question: "A project manager in an information technology project is discussing a complex algorithm with a new team member. After a long and thorough verbal discussion, the project manager asks the person if he understood the algorithm and is capable of putting it in the document. The team member implies that he has understood. However, when the project manager goes through the document, he realizes that the member didn’t understand what was actually said, thus resulting in an inefficient use of time and effort. Who is responsible for this loss of time and how could it have been avoided?",
        choices: [
            { id: 'a', text: "Project manager, he shouldn’t have given the complex assignment to a new team member" },
            { id: 'b', text: "Team Member, since he implied he understood the discussion and didn’t ask immediately" },
            { id: 'c', text: "Project Manager, as he should have also helped the team member in preparing and reviewing the document" },
            { id: 'd', text: "Project manager, since it is his responsibility to ensure his message is clear and concise and confirm that the team member truly understands the message" }
        ],
        answer: 'd'
    },
    {
        id: 33,
        question: "As a project manager, you monitor the project’s issue log which captures issue description, priority, owner, the target date for resolution, and status. All of the following are common examples of issues in the project EXCEPT?",
        choices: [
            { id: 'a', text: "Differences in opinion" },
            { id: 'b', text: "Probable delay in the next delivery" },
            { id: 'c', text: "Pending root cause analysis" },
            { id: 'd', text: "Delay in receiving feedback from the customer" }
        ],
        answer: 'b'
    },
    {
        id: 34,
        question: "You are developing the project charter for the new project assigned to you. Which of the following is NOT part of the enterprise environmental factors?",
        choices: [
            { id: 'a', text: "Lessons learned from previous projects" },
            { id: 'b', text: "Work authorization system" },
            { id: 'c', text: "Government and industry standards that affect your project" },
            { id: 'd', text: "Knowledge of which departments in your company typically work on projects" }
        ],
        answer: 'a'
    },
    {
        id: 35,
        question: "Which of the following models or grids describes classes of stakeholders based on their power, need for immediate attention, and appropriate involvement?",
        choices: [
            { id: 'a', text: "Power/influence (active involvement) grid" },
            { id: 'b', text: "Power/interest (level of concern) grid" },
            { id: 'c', text: "Salience model" },
            { id: 'd', text: "Influence/impact grid" }
        ],
        answer: 'c'
    },
    {
        id: 36,
        question: "As a project manager, you understand the importance of effective communication with stakeholders. You want to present a project progress report to the stakeholders in the next project meeting. What should be your approach?",
        choices: [
            { id: 'a', text: "Make the report concise, restricted to specific technical details of the project" },
            { id: 'b', text: "Prepare a complete report but filter the information to remove details" },
            { id: 'c', text: "Focus on specific stakeholders with whom there is good personal relation" },
            { id: 'd', text: "Research and understand the experience level and expectations of stakeholders" }
        ],
        answer: 'd'
    },
    {
        id: 37,
        question: "A project activity has values for the earliest and latest date it can start and earliest and latest date it can be completed. An activity’s Late Start (LS) is day 5 and Late Finish is (LF) day 10. Similarly Early Start (ES) is day 3 and Early finish (EF) is day 8. What is the float of this activity?",
        choices: [
            { id: 'a', text: "5 days" },
            { id: 'b', text: "4 days" },
            { id: 'c', text: "2 days" },
            { id: 'd', text: "3 days" }
        ],
        answer: 'c'
    },
    {
        id: 38,
        question: "You recently took over a project in the execution phase with large procurements. In a meeting with stakeholders, you notice diverging opinions on almost all procurement aspects: Should the seller deliver turnkey? Based on which contract type should sellers be paid? What are the milestones of the bidding process and following activities etc? Which of the following would help BEST in this situation?",
        choices: [
            { id: 'a', text: "Create a procurement management plan" },
            { id: 'b', text: "Determine a procurement strategy" },
            { id: 'c', text: "Agree on contract types and vendors" },
            { id: 'd', text: "Coordinate procurement work with other project work" }
        ],
        answer: 'b'
    },
    {
        id: 39,
        question: "Of the following, which conflict resolution technique is believed to generate the LEAST enduring positive results?",
        choices: [
            { id: 'a', text: "Problem Solving" },
            { id: 'b', text: "Avoidance" },
            { id: 'c', text: "Compromising" },
            { id: 'd', text: "Forcing" }
        ],
        answer: 'd'
    },
    {
        id: 40,
        question: "As a project manager, you have been asked by the customer to give an overview of the project status using milestone charts. Which of the following statement is not true about milestone charts?",
        choices: [
            { id: 'a', text: "Milestones have zero duration" },
            { id: 'b', text: "Milestone charts are similar to bar charts but only show major events" },
            { id: 'c', text: "Milestone charts can be used to capture the status of project schedule" },
            { id: 'd', text: "Milestones are only used to define the phases of a project" }
        ],
        answer: 'd'
    },
    {
        id: 41,
        question: "Which of the following is a tool used in the perform qualitative risk analysis process?",
        choices: [
            { id: 'a', text: "SWOT (Strength, Weakness, Opportunities and Threat)" },
            { id: 'b', text: "Probability and Impact Matrix" },
            { id: 'c', text: "Root cause identification" },
            { id: 'd', text: "Monte Carlo Simulation" }
        ],
        answer: 'b'
    },
    {
        id: 42,
        question: "You are managing a multinational project with team members sitting across different countries with varying time zones. In this scenario, you wish to choose a communication medium which is most efficient for the project requirements. What is the most appropriate way to address this?",
        choices: [
            { id: 'a', text: "Discuss these communication requirements and available options with stakeholders to seek their input exclusively for your project instead of using existing tools in the organization" },
            { id: 'b', text: "Use the most cost effective technique and involve everyone to explain its usage" },
            { id: 'c', text: "Use a combination of communication technology as being done in your peer’s project" },
            { id: 'd', text: "Explore communication tools available in the market and ask for quotation" }
        ],
        answer: 'a'
    },
    {
        id: 43,
        question: "Which of the following are the MOST important to deriving the total funding requirements and periodic funding requirements of the project?",
        choices: [
            { id: 'a', text: "Management Reserve and Contingency Reserve" },
            { id: 'b', text: "Cost Baseline and Management Reserve" },
            { id: 'c', text: "Funding Limit Reconciliation" },
            { id: 'd', text: "Project Budget and Contingency Reserve" }
        ],
        answer: 'b'
    },
    {
        id: 44,
        question: "Your agile project is in its execution. You facilitate a meeting where the team takes time to learn from previous work and collects qualitative and quantitative data, performs root cause analysis, and develops action plans to remove impediments. Which meeting is conducted?",
        choices: [
            { id: 'a', text: "Problem solving workshop" },
            { id: 'b', text: "Review" },
            { id: 'c', text: "Retrospective" },
            { id: 'd', text: "Lessons learned" }
        ],
        answer: 'c'
    },
    {
        id: 45,
        question: "Which of the following is the correct order of actions that you take during the closing processes?",
        choices: [
            { id: 'a', text: "Get formal acceptance, release the team, write lessons learned, close the contract" },
            { id: 'b', text: "Write lessons learned, release the team, get formal acceptance, close the contract" },
            { id: 'c', text: "Close the contract, get formal acceptance, write lessons learned, release the team" },
            { id: 'd', text: "Get formal acceptance, close the contract, write lessons learned, release the team" }
        ],
        answer: 'c'
    },
    {
        id: 46,
        question: "You are managing a project, which is innovative and is expected to create new knowledge in a large scale. The project involves some explicit knowledge and much more implicit or tacit knowledge, which are insights, experience and know-how of the individuals in the project team. To ensure effectiveness of learning for the team, stakeholders, and the organization, what should you do?",
        choices: [
            { id: 'a', text: "Conduct well prepared lessons learned workshops at the end of your project" },
            { id: 'b', text: "Hire an external consultancy with proven expertise in providing knowledge transfer" },
            { id: 'c', text: "Use knowledge management tools and techniques" },
            { id: 'd', text: "Document learnings and knowledge accurately so that they can be shared" }
        ],
        answer: 'c'
    },
    {
        id: 47,
        question: "As a project manager, you understand the importance of handling contested and potential constructive changes contract documents and correspondence for future references. Which of the following can be used to document, process, and monitor these changes throughout the contract life cycle?",
        choices: [
            { id: 'a', text: "Procurement" },
            { id: 'b', text: "Procurement documents" },
            { id: 'c', text: "Lessons Learned" },
            { id: 'd', text: "Claims Administration" }
        ],
        answer: 'd'
    },
    {
        id: 48,
        question: "Your project has faced some unforeseen issues that have delayed it. The project is very critical for the company and it has to meet the scheduled deadline. In order to meet the deadline your team would have to work over the weekends for the next two weeks. However, you know that many of the team members will have some personal commitments and it will be very difficult for them to work for seven consecutive days. What is the BEST option for you?",
        choices: [
            { id: 'a', text: "Hire additional resources and brief them about the project" },
            { id: 'b', text: "Inform the customer that this deadline can't be met" },
            { id: 'c', text: "Discuss the situation with the team and give them the choice to willingly work overtime" },
            { id: 'd', text: "Send an official mail making it mandatory for the team to come and work over the weekends" }
        ],
        answer: 'c'
    },
    {
        id: 49,
        question: "As part of a joint venture, a project manager working with another company needs to share some confidential information related to intellectual property rights. He wants to know the person responsible for authorizing the release of this confidential information. Which project document should he refer?",
        choices: [
            { id: 'a', text: "Organizational Breakdown Structure" },
            { id: 'b', text: "Project Charter" },
            { id: 'c', text: "Project Communication Management Plan" },
            { id: 'd', text: "Stakeholder Management Plan" }
        ],
        answer: 'c'
    },
    {
        id: 50,
        question: "A project manager is going through the defect report reviewing the bugs reported during the testing cycle of a software project. The report has information on the severity of the bug, origin of the bug, possible resolutions, along with the owner and reporter of the bug. The project manager wants to prioritize the bug fixing activities by evaluating the top three most frequent reasons for the defects. Which of the following tools should he use?",
        choices: [
            { id: 'a', text: "Control chart" },
            { id: 'b', text: "Fishbone diagram" },
            { id: 'c', text: "Scatter diagram" },
            { id: 'd', text: "Pareto chart" }
        ],
        answer: 'd'
    },
    {
        id: 51,
        question: "You are managing an agile project. In a meeting with senior management, a discussion emerges about ‘T-shaped’ people, being a requirement for working in an agile environment. Which of the following definitions of ‘T-shaped’ people is correct?",
        choices: [
            { id: 'a', text: "Generalizing specialists: team members have a focus specialty plus a breadth of experience across multiple skills" },
            { id: 'b', text: "Team structured: working in a crossfunctional and self organizing team" },
            { id: 'c', text: "Tight matrix: team members work in crossfunctional and collocated teams" },
            { id: 'd', text: "Turn-over: team members with a low turn-over rate are preferred to work in agile environments" }
        ],
        answer: 'a'
    },
    {
        id: 52,
        question: "As a project manager, you are conducting a structured review of the seller's progress to deliver the project within the contract specifications. Your objective is to determine progress with respect to the procurement statement of work. When would you be doing this review in your project?",
        choices: [
            { id: 'a', text: "During contract closure" },
            { id: 'b', text: "Before awarding the contract" },
            { id: 'c', text: "During a project performance review" },
            { id: 'd', text: "In case of non-conformance by seller" }
        ],
        answer: 'c'
    },
    {
        id: 53,
        question: "Which one of the following is the last step of project closing?",
        choices: [
            { id: 'a', text: "Archive Project Documents" },
            { id: 'b', text: "Measure customer satisfaction at the end of the project" },
            { id: 'c', text: "Reallocate facilities and equipment, and release project resources" },
            { id: 'd', text: "Document lessons learned" }
        ],
        answer: 'c'
    },
    {
        id: 54,
        question: "Project performance reviews using earned value management would typically incorporate information from all the following EXCEPT?",
        choices: [
            { id: 'a', text: "Variance Analysis" },
            { id: 'b', text: "Cost Benefit Analysis" },
            { id: 'c', text: "Trend Analysis" },
            { id: 'd', text: "Earned Value Analysis" }
        ],
        answer: 'b'
    },
    {
        id: 55,
        question: "A key stakeholder of the project is contacted for a requirements document approval, but shows no interest. The project manager decides to have a friendly, informal discussion with him to understand the reason for his lack of interest. During the conversation, the stakeholder expresses his displeasure that two of his key suggestions were not addressed on the project. He feels as though his approval or feedback doesn't really matter since his main requirements are not being captured. What is the best option for the project manager in this case?",
        choices: [
            { id: 'a', text: "Agree with stakeholder and don't take his approval on requirements. Remove his name from the list of stakeholders and avoid communicating with him further on project status" },
            { id: 'b', text: "Incorporate the requirements of the stakeholder and then take his approval" },
            { id: 'c', text: "Talk to your project sponsor about the issue and take his approval before taking any further action" },
            { id: 'd', text: "Explain to the stakeholder that although his suggestions were appreciated, it is not possible to address all of them in this release due to project constraints. You will revisit them for the next phase." }
        ],
        answer: 'd'
    },
    {
        id: 56,
        question: "Your development team is waiting for the design team to finish their work. As a project manager, you have decided to use this approach to reduce uncertainty in the project. Which of the following relationships does this describe?",
        choices: [
            { id: 'a', text: "Iterative relationship" },
            { id: 'b', text: "Sequential relationship" },
            { id: 'c', text: "Overlapping relationship" },
            { id: 'd', text: "Common relationship" }
        ],
        answer: 'b'
    },
    {
        id: 57,
        question: "You are a project manager taking over a project midway. It is in the execution phase. You would like to know more about project deliverables, work required to complete those deliverables, acceptance criteria etc. Which of the following documents would be MOST useful?",
        choices: [
            { id: 'a', text: "Work Breakdown Structure (WBS) and WBS dictionary" },
            { id: 'b', text: "Requirements Documentation" },
            { id: 'c', text: "Activity List" },
            { id: 'd', text: "Project Scope Statement" }
        ],
        answer: 'd'
    },
    {
        id: 58,
        question: "You are project manager and your project under contract is in its closing phase. You’ve been asked by your sponsor to inform all the stakeholders about how the project met its competing demands and objectives, and about how the project achieved its business objectives. What is the best thing to do?",
        choices: [
            { id: 'a', text: "Consult your communications management plan" },
            { id: 'b', text: "Conduct a customer wrap-up meeting" },
            { id: 'c', text: "Invite the stakeholders to the project’s final steering committee meeting" },
            { id: 'd', text: "Complete the project’s final report and communicate appropriately" }
        ],
        answer: 'd'
    },
    {
        id: 59,
        question: "A project manager wants to apply a set of technical guidelines to be used during the development of the project’s product to optimize a specific aspect of the design: the manufacturing costs. Which of the following methods would be most appropriate to use?",
        choices: [
            { id: 'a', text: "Problem solving" },
            { id: 'b', text: "Design for X (DfX)" },
            { id: 'c', text: "Root cause analysis" },
            { id: 'd', text: "Six Sigma" }
        ],
        answer: 'd'
    },
    {
        id: 60,
        question: "A project manager wants to determine the standard deviation for an activity cost estimate using a beta distribution estimate with the following data: Pessimistic=8,000, Optimistic=2,000, Most Likely=5,000. What is the standard deviation?",
        choices: [
            { id: 'a', text: "6,000" },
            { id: 'b', text: "2,000" },
            { id: 'c', text: "1,000" },
            { id: 'd', text: "Not enough information" }
        ],
        answer: 'c'
    },
    {
        id: 61,
        question: "Your team completed first product components and you are collecting deliverable status, schedule progress and costs incurred to prepare for the next meeting of the project steering committee. Which process are you performing?",
        choices: [
            { id: 'a', text: "Monitor and control project work" },
            { id: 'b', text: "Manage communications" },
            { id: 'c', text: "Direct and manage project work" },
            { id: 'd', text: "Manage project team" }
        ],
        answer: 'c'
    },
    {
        id: 62,
        question: "You are managing a construction project which is nearing completion when a major stakeholder points out a flaw in the design which could make the entire structure weak. He suggests a change which would provide the necessary support. You are worried that this change could impact the schedule and cost of the project significantly. What is your BEST response to the stakeholder?",
        choices: [
            { id: 'a', text: "Refuse him as the project is already nearing completion and it's not possible to make any changes at this stage" },
            { id: 'b', text: "Do a root cause analysis with the team to determine how this design flaw could have been missed and if there could be more potential problems with the design" },
            { id: 'c', text: "Proceed with the change and communicate the impact on project schedule and cost to the customer" },
            { id: 'd', text: "Use a schedule compression technique as part of integrated change control to investigate and minimize the adverse impact of the change" }
        ],
        answer: 'd'
    },
    {
        id: 63,
        question: "During project execution, the customer interprets a clause in the contract differently and demands an elaborate design document as part of the next deliverable. According to your planning, the document is not included in the deliverable list. What is the best you can do to resolve the situation?",
        choices: [
            { id: 'a', text: "Change the contract and continue with your project work" },
            { id: 'b', text: "Accept customer’s demand as he is the one responsible for project’s success" },
            { id: 'c', text: "Raise a complaint to project sponsor along with the implications of accepting such request on schedule and cost of the project" },
            { id: 'd', text: "Document the dispute and refer to the claims administration" }
        ],
        answer: 'd'
    },
    {
        id: 64,
        question: "A project manager wants to measure project performance against the project baseline. Which of the following techniques would be MOST helpful?",
        choices: [
            { id: 'a', text: "Variance Analysis" },
            { id: 'b', text: "Earned Value Analysis" },
            { id: 'c', text: "Work Performance Information" },
            { id: 'd', text: "Reserve Analysis" }
        ],
        answer: 'b'
    },
    {
        id: 65,
        question: "A project manager is conducting procurement activities to select the most suitable sellers. Which of the following tools will NOT be helpful?",
        choices: [
            { id: 'a', text: "Proposal Evaluation" },
            { id: 'b', text: "Advertising" },
            { id: 'c', text: "Procurement Negotiations" },
            { id: 'd', text: "Agreements" }
        ],
        answer: 'd'
    },
    {
        id: 66,
        question: "A project team is in the process of implementing agreed upon risk responses. The response action defined by the mitigation and contingency plans is being executed in accordance with the details of those plans. Who is responsible for implementing the responses?",
        choices: [
            { id: 'a', text: "Project Manager" },
            { id: 'b', text: "Project Team" },
            { id: 'c', text: "Risk Owner" },
            { id: 'd', text: "Risk Manager" }
        ],
        answer: 'c'
    },
    {
        id: 67,
        question: "You are a project manager; your new project leads to significant change in your organization and all its internal and external stakeholders. From similar projects in other industries you are aware of the fact that a large part of the individuals, groups and organizations perceive that they will be affected by the outcomes of the project. How should you react?",
        choices: [
            { id: 'a', text: "Identify all stakeholders, ensure that all team members are involved in stakeholder engagement activities, and review the stakeholder community regularly" },
            { id: 'b', text: "Ask your sponsor for support, because he is obliged to do so" },
            { id: 'c', text: "Delegate stakeholder activities to line managers to gain leverage to drive the internal change" },
            { id: 'd', text: "Hire a consultancy with proven expertise to help you in this matter" }
        ],
        answer: 'a'
    },
    {
        id: 68,
        question: "After awarding a contract to one of the sellers, you realize you have missed a clause for delay in the contract and want to modify it. How should you proceed further?",
        choices: [
            { id: 'a', text: "Contract is legally binding and cannot be changed once signed" },
            { id: 'b', text: "Project manager should inform the seller about the change in next meeting" },
            { id: 'c', text: "Project manager should inform the seller about the change through a formal written communication" },
            { id: 'd', text: "Project manager should proceed according to the contract change control system at his end" }
        ],
        answer: 'd'
    },
    {
        id: 69,
        question: "A pharmaceutical company recently terminated a research project because it no longer seems commercially viable for the company. What is the FIRST thing the project manager should do?",
        choices: [
            { id: 'a', text: "Release the team members" },
            { id: 'b', text: "Document the lessons learned" },
            { id: 'c', text: "Conduct scope validation" },
            { id: 'd', text: "Discuss with senior manager the reason for project termination" }
        ],
        answer: 'c'
    },
    {
        id: 70,
        question: "A project manager has derived quality metrics, such as cost performance, failure rates, customer satisfaction scores, and percentage of requirements covered by test plans along with tolerance limits for his project. He is performing which project management process?",
        choices: [
            { id: 'a', text: "Plan Quality Management" },
            { id: 'b', text: "Manage Quality" },
            { id: 'c', text: "Control Quality" },
            { id: 'd', text: "Define Scope" }
        ],
        answer: 'a'
    },
    {
        id: 71,
        question: "As a project manager you are working with your team to explore alternatives to decrease project cost without compromising on performance or scope of the project. You are most probably using which of the following techniques?",
        choices: [
            { id: 'a', text: "Benchmarking" },
            { id: 'b', text: "Simultaneous Engineering" },
            { id: 'c', text: "Process Analysis" },
            { id: 'd', text: "Product analysis" }
        ],
        answer: 'd'
    },
    {
        id: 72,
        question: "The project manager is reviewing the issue log as part of project execution. Which of the following should the project manager perform as part of his monitoring and controlling process group activity?",
        choices: [
            { id: 'a', text: "Assess the corrective actions on the issue log" },
            { id: 'b', text: "Determine the next steps for unresolved issues" },
            { id: 'c', text: "Use appropriate tools and techniques in order to minimize the impact on project schedule, cost and resources" },
            { id: 'd', text: "All of the above" }
        ],
        answer: 'd'
    },
    {
        id: 73,
        question: "Your project is the development and launch of a new product in the market. For this purpose, you are analyzing the existing products in the market to compare their features. You also compare industry standards for performance metrics including cost, life cycle time, productivity, and quality to come up with your own product metrics. You are doing which of the following activities?",
        choices: [
            { id: 'a', text: "Cost Benefit Analysis" },
            { id: 'b', text: "Value Engineering" },
            { id: 'c', text: "Benchmarking" },
            { id: 'd', text: "Process Analysis" }
        ],
        answer: 'c'
    },
    {
        id: 74,
        question: "You and your team have finished creating the WBS and WBS dictionary. Afterwards, you prepare a detailed documentation of all of the project’s schedule as appropriate. What should you do NEXT?",
        choices: [
            { id: 'a', text: "Create network diagram for the project" },
            { id: 'b', text: "Estimate time and costs for each activity" },
            { id: 'c', text: "Create the schedule" },
            { id: 'd', text: "Conduct project progress meeting" }
        ],
        answer: 'a'
    },
    {
        id: 75,
        question: "You are managing a large project. One of your teams has developed a new component that has a negative impact on system performance. You have slated a meeting to assess the impact of the problem and find out ways to resolve it. Which of the following should you use to facilitate communication and ensure effectively recording and tracking of the issue?",
        choices: [
            { id: 'a', text: "Risk register" },
            { id: 'b', text: "Communication methods" },
            { id: 'c', text: "Issue log" },
            { id: 'd', text: "Communications management plan" }
        ],
        answer: 'c'
    },
    {
        id: 76,
        question: "Which of the following are inputs to the Direct and Manage Project Work process?",
        choices: [
            { id: 'a', text: "Performance reports and approved change requests" },
            { id: 'b', text: "Corrective action" },
            { id: 'c', text: "Verified deliverables" },
            { id: 'd', text: "Work performance information" }
        ],
        answer: 'a'
    },
    {
        id: 77,
        question: "You and your project team are facing several time constraints and are not having the time to develop a WBS from scratch. What would be the best option?",
        choices: [
            { id: 'a', text: "You make use of the organizational process assets" },
            { id: 'b', text: "You save time by cutting down requirements collection and analysis" },
            { id: 'c', text: "You decompose the WBS not in too much detail" },
            { id: 'd', text: "You can ignore the time constraints because you have to develop a realistic plan" }
        ],
        answer: 'a'
    },
    {
        id: 78,
        question: "You as the project manager have signed a lump-sum contract with a software vendor for the development of a new application. The contract price seems rather low to you. Which of the following statements is NOT true for this situation?",
        choices: [
            { id: 'a', text: "In a fixed-price contract, change requests can cause issues regarding additional time and extra costs for the changes to be applied" },
            { id: 'b', text: "It is the contractor's risk in this type of contract that their profit may vanish if costs have been underestimated" },
            { id: 'c', text: "Your organization very probably may have to assume unexpected additional costs for the software development in this type of contract" },
            { id: 'd', text: "This form of contract should only be chosen when all the requirements for the building of the product are well-known by all parties involved" }
        ],
        answer: 'c'
    },
    {
        id: 79,
        question: "Which of the following is NOT true of obtaining project management plan approval?",
        choices: [
            { id: 'a', text: "Until you obtain approval of the project management plan or its major elements, you don’t need to put changes to it through change control" },
            { id: 'b', text: "Change control makes sure that only approved changes go into the approved plan" },
            { id: 'c', text: "All updates of the planning before approval have to go through integrated change control" },
            { id: 'd', text: "It’s important for the entire team to buy into the PM Plan for it to be successful" }
        ],
        answer: 'c'
    },
    {
        id: 80,
        question: "A project manager is studying the business documents and going through the narrative description of products and services to be completed by the project. He is also meeting key stakeholders and subject matter experts to evaluate whether or not the project is worth the required investment. Which of the following documents would be created as an output in the process?",
        choices: [
            { id: 'a', text: "Project Scope Statement" },
            { id: 'b', text: "Project Charter" },
            { id: 'c', text: "Project Management Plan" },
            { id: 'd', text: "Stakeholder Register" }
        ],
        answer: 'b'
    },
    {
        id: 81,
        question: "You are a project manager managing a project with a high level of complexity and uncertainty, using an adaptive approach. Which of the following techniques would be most useful to create a schedule that defines for the customer when which feature will be available?",
        choices: [
            { id: 'a', text: "Critical Path Method" },
            { id: 'b', text: "Fast Tracking" },
            { id: 'c', text: "Agile Release Planning" },
            { id: 'd', text: "On-Demand Scheduling" }
        ],
        answer: 'c'
    },
    {
        id: 82,
        question: "A project manager is collecting, organizing, and distributing information on how project resources are being used to complete project objectives. In addition, he is adapting the information to be provided at an appropriate level and format. The project manager is in which process?",
        choices: [
            { id: 'a', text: "Direct and Manage Project Work" },
            { id: 'b', text: "Manage Communications" },
            { id: 'c', text: "Earned Value Technique" },
            { id: 'd', text: "Control Risks" }
        ],
        answer: 'b'
    },
    {
        id: 83,
        question: "A project manager is in the process of predicting future performance based on the performance to date. Which activity is he performing?",
        choices: [
            { id: 'a', text: "Variance Analysis" },
            { id: 'b', text: "Trend Analysis" },
            { id: 'c', text: "Design of Experiments" },
            { id: 'd', text: "Benchmarking" }
        ],
        answer: 'b'
    },
    {
        id: 84,
        question: "Which of the following is not included in 'cost of conformance'?",
        choices: [
            { id: 'a', text: "Prevention cost" },
            { id: 'b', text: "Appraisal cost" },
            { id: 'c', text: "Internal failure cost" },
            { id: 'd', text: "Cost of training" }
        ],
        answer: 'c'
    },
    {
        id: 85,
        question: "Which of the following can be found in the project charter?",
        choices: [
            { id: 'a', text: "Instructions and organizational standards, how projects are initiated" },
            { id: 'b', text: "Functional and non-functional requirements" },
            { id: 'c', text: "Product acceptance criteria" },
            { id: 'd', text: "Measurable project objectives and related success criteria" }
        ],
        answer: 'd'
    },
    {
        id: 86,
        question: "Which of the following can be found in the stakeholder management strategy?",
        choices: [
            { id: 'a', text: "Roles and responsibilities of stakeholders" },
            { id: 'b', text: "Level of participation in the project desired for relevant stakeholders" },
            { id: 'c', text: "Communication requirements of stakeholders" },
            { id: 'd', text: "Information to be communicated" }
        ],
        answer: 'b'
    },
    {
        id: 87,
        question: "When you are conducting a trend analysis, in which of the following processes you are in?",
        choices: [
            { id: 'a', text: "Control Costs" },
            { id: 'b', text: "Monitor and Control Project Work" },
            { id: 'c', text: "Control Resources" },
            { id: 'd', text: "All of the above" }
        ],
        answer: 'd'
    },
    {
        id: 88,
        question: "Which of the following is NOT a tool for the Manage Quality process?",
        choices: [
            { id: 'a', text: "Quality Audits" },
            { id: 'b', text: "Design for X" },
            { id: 'c', text: "Checklists" },
            { id: 'd', text: "Quality Metrics" }
        ],
        answer: 'd'
    },
    {
        id: 89,
        question: "You are working on a project to build a hybrid car which would run on diesel fuel, as well as electricity. This car would have a 750 ccm engine and a regenerative braking system. It should be able to seat four passengers including a driver and comply with advanced Euro 6 emission norms. This information should be captured in which of the following documents?",
        choices: [
            { id: 'a', text: "Product Scope" },
            { id: 'b', text: "Project Scope" },
            { id: 'c', text: "Scope baseline" },
            { id: 'd', text: "Requirements Management Plan" }
        ],
        answer: 'a'
    },
    {
        id: 90,
        question: "A project manager expects many changes during the course of the project. He wants to establish a robust configuration management system and also make his team aware of the process. Which of the following statements is NOT true about configuration management?",
        choices: [
            { id: 'a', text: "The purpose of configuration management is to maintain integrity of work product" },
            { id: 'b', text: "Configuration management includes configuration audits, configuration control, configuration status accounting and configuration identification" },
            { id: 'c', text: "Configuration management focuses on establishing and maintaining consistency of a product's requirements" },
            { id: 'd', text: "Configuration management involves measuring project performance with baselines and taking corrective action when necessary" }
        ],
        answer: 'd'
    },
    {
        id: 91,
        question: "Which of the following is the estimating technique that uses a statistical relationship between the historical data and other variables to calculate an estimate for an activity?",
        choices: [
            { id: 'a', text: "Analogous Estimating" },
            { id: 'b', text: "Parametric Estimating" },
            { id: 'c', text: "Three Point Estimating" },
            { id: 'd', text: "Monte Carlo technique" }
        ],
        answer: 'b'
    },
    {
        id: 92,
        question: "A project manager is facing many serious issues in his project. The project's final deliverable is scheduled for four weeks from now. It needs to fulfill compliance to mandatory standards. In addition to that there are some changes required to improve performance which the project manager feels will make the customer happy. Above all, a senior test engineer asks the project manager for a long leave. Which is the most critical issue the project manager needs to address FIRST?",
        choices: [
            { id: 'a', text: "Ensure product complies to standards" },
            { id: 'b', text: "Find a replacement for the senior tester and ensure he completes knowledge transfer before leaving" },
            { id: 'c', text: "Complete change control process to incorporate changes to enhance performance" },
            { id: 'd', text: "Notify the customer about probable delay in the final deliverable to avoid surprise later" }
        ],
        answer: 'a'
    },
    {
        id: 93,
        question: "You are project manager on an industrial engineering project. You have found a pattern of defects occurring in all of your projects over the past few years and you think there might be a problem in the process your company is using that is causing it. You use Ishikawa diagrams to come up with the root cause for this trend over projects so that you can make recommendations for process changes to avoid this problem in the future. What process are you performing?",
        choices: [
            { id: 'a', text: "Plan Quality Management" },
            { id: 'b', text: "Manage Quality" },
            { id: 'c', text: "Perform Qualitative Risk Analysis" },
            { id: 'd', text: "Control Quality" }
        ],
        answer: 'b'
    },
    {
        id: 94,
        question: "Which of the following shows roles and responsibilities on your project?",
        choices: [
            { id: 'a', text: "Project organization chart" },
            { id: 'b', text: "Bar chart" },
            { id: 'c', text: "RACI matrix" },
            { id: 'd', text: "Resource histogram" }
        ],
        answer: 'c'
    },
    {
        id: 95,
        question: "You are the project manager for a construction project. Your sponsor has asked you for a forecast for the cost of project completion. The project has a total budget of $800,000 and CPI of .95. The project has spent $250,000 of its budget so far. How much more money will you probably expend for the project?",
        choices: [
            { id: 'a', text: "$842,105" },
            { id: 'b', text: "$800,000" },
            { id: 'c', text: "$1,092,105" },
            { id: 'd', text: "$592,105" }
        ],
        answer: 'd'
    },
    {
        id: 96,
        question: "You are project manager on an event project. About halfway through the project, you found that you had not estimated enough time for some of the technical work your team needed to do. You requested that the new work be added to the scope statement and that the time to do the work be added to the schedule. The change control board approved your change. What’s your next step?",
        choices: [
            { id: 'a', text: "Manage Quality" },
            { id: 'b', text: "Start doing the work" },
            { id: 'c', text: "Gather performance metrics on the team’s work so far" },
            { id: 'd', text: "Update the scope and schedule baselines to reflect the approved change" }
        ],
        answer: 'd'
    },
    {
        id: 97,
        question: "Which is the BEST definition of quality?",
        choices: [
            { id: 'a', text: "A product that passes all of its tests" },
            { id: 'b', text: "A product that satisfies the requirements of the people who pay for it" },
            { id: 'c', text: "A product made of very expensive materials" },
            { id: 'd', text: "A product made with a lot of care by the team who built it" }
        ],
        answer: 'b'
    },
    {
        id: 98,
        question: "In which plan do you define the processes that will be used to keep people informed throughout the project?",
        choices: [
            { id: 'a', text: "Communications Management Plan" },
            { id: 'b', text: "Stakeholder Engagement Plan" },
            { id: 'c', text: "Quality Management Plan" },
            { id: 'd', text: "Resource Management Plan" }
        ],
        answer: 'a'
    },
    {
        id: 99,
        question: "A team member approaches you with a change that could cut your schedule down by one month. What is the first thing you should do?",
        choices: [
            { id: 'a', text: "Make the change; it’s going to save time and nobody will want the project to take longer than it should" },
            { id: 'b', text: "Figure out the impact on the scope of the work, the cost and other knowledge areas before you submit the change request" },
            { id: 'c', text: "Write up a change request and see if you can get it approved" },
            { id: 'd', text: "Tell the team member that you’ve already communicated the deadline for the project, so you can’t make any changes now" }
        ],
        answer: 'b'
    },
    {
        id: 100,
        question: "A project manager has completed the project charter and is looking forward to start working on the project management plan. What should he do next?",
        choices: [
            { id: 'a', text: "To determine on the management plans for the project" },
            { id: 'b', text: "To review the project charter with key stakeholders" },
            { id: 'c', text: "To start the next project phase" },
            { id: 'd', text: "To get the sponsor’s signature to authorize the project" }
        ],
        answer: 'd'
    }
];

export default Questions