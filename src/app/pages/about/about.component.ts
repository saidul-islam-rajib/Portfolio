import { Component, OnInit } from '@angular/core';
import { AdditionalSkill } from 'src/app/core/interfaces/additional-skill';
import { Education } from 'src/app/core/interfaces/education';
import { Experience } from 'src/app/core/interfaces/experience';
import { Interest } from 'src/app/core/interfaces/interest';
import { Project } from 'src/app/core/interfaces/project';
import { Publication } from 'src/app/core/interfaces/publication';
import { Training } from 'src/app/core/interfaces/training';
import { UserInformation } from 'src/app/core/interfaces/user-information';
import { AdditionalSkillService } from 'src/app/core/services/additional-skill.service';
import { CalculateDurationService } from 'src/app/core/services/common/calculate-duration.service';
import { EducationService } from 'src/app/core/services/education.service';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { InterestService } from 'src/app/core/services/interest.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { PublicationService } from 'src/app/core/services/publication.service';
import { UserInformationService } from 'src/app/core/services/user-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user: UserInformation = {
    userId: "",
    userName: "",
    userEmail: "",
    userBio: ""
  };

  experiences: Experience[] = [];
  educationList: Education[] = [];
  publicationList: Publication[] = [];
  additionalSkillList: AdditionalSkill[] = [];
  interstList: Interest[] = [];
  projectList: Project[] = [];
  trainingList: Training[] = [];

  constructor(
    private readonly userInformationService: UserInformationService,
    private durationService: CalculateDurationService,
  ) { }

  ngOnInit(): void {
    this.loadUserInformation();
    this.loadExperiences();
    this.loadEducations();
    this.loadPublication();
    this.loadAdditionalSkill();
    this.loadInterest();
    this.loadProject();
    this.loadTraining();
  }

  loadUserInformation(): void {
    this.userInformationService.getUserInformation().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('User Information Error:', err);
      }
    });
  }

  loadExperiences(): void {
    this.experiences = [
      {
        companyName: 'Brain Station 23',
        companyUrl: 'https://brainstation-23.com/',
        shortName: 'BS23',
        companyLogo: '../../../assets/images/bs_23_logo.jpg',
        designation: 'Software Engineer II',
        isCurrentEmployee: true,
        isFullTimeEmployee: true,
        startDate: new Date('2025-11-13'),
        endDate: new Date(),
        userId: 'user123',
        experienceSection: [
          {
            "experienceSectionId": "section1",
            "sectionDescription": "Working on the SMBUI application using Next.js, focusing on bug fixing, feature implementation, code refactoring, and continuous improvements."
          },
          {
            "experienceSectionId": "section2",
            "sectionDescription": "Managed backend development using ASP.NET Core within the nopCommerce architecture, ensuring seamless frontend–backend integration."
          },
          {
            "experienceSectionId": "section3",
            "sectionDescription": "Created, customized, and maintained nopCommerce themes and plugins based on requirements."
          }
        ]
      },
      {
        companyName: 'ASA International Management Services Limited',
        companyUrl: 'https://www.asa-international.com/',
        shortName: 'AMSL',
        companyLogo: '../../../assets/images/asa_international_asai__logo.jpeg',
        designation: 'Junior Software Engineer',
        isCurrentEmployee: false,
        isFullTimeEmployee: true,
        startDate: new Date('2023-01-11'),
        endDate: new Date('2025-11-02'),
        userId: 'user123',
        experienceSection: [
          {
            experienceSectionId: 'section1',
            sectionDescription: 'Conduct necessary research, collaborate with teams, maintain Software Development Life Cycle (SDLC) and then design & develop software application by writing efficient, reusable and maintainable code.',
          },
          {
            experienceSectionId: 'section2',
            sectionDescription: 'Added new feature in banking system named Monthly Deposit Scheme and Fixed Deposit Scheme for Rwanda',
          },
          {
            experienceSectionId: 'section3',
            sectionDescription: 'Fix bugs and improve performance of existing applications(like Executive Dashboard)',
          }
        ]
      },
      {
        companyName: 'ASA International Management Services Limited',
        companyUrl: 'https://www.asa-international.com/',
        shortName: 'AMSL',
        companyLogo: '../../../assets/images/asa_international_asai__logo.jpeg',
        designation: 'Intern Software Engineer',
        isCurrentEmployee: false,
        isFullTimeEmployee: true,
        startDate: new Date('2022-10-10'),
        endDate: new Date('2023-01-10'),
        userId: 'user124',
        experienceSection: [
          {
            experienceSectionId: 'section1',
            sectionDescription: 'Creating new applications (full stack development through angular for frontend, ASP.NET web API for creating API’s) and updating existing applications based on requirements',
          },
          {
            experienceSectionId: 'section2',
            sectionDescription: 'Working with microservice architecture and debugging programming codes to fix bugs & errors and improve performance of the existing system (like AMBS Nextgen project)',
          },
          {
            experienceSectionId: 'section3',
            sectionDescription: 'Testing software application including performance, functional, integration, system and user acceptance',
          }
        ]
      },
      {
        companyName: 'LIAO HE PTE LTD, Singapore',
        companyUrl: 'https://www.sgpbusiness.com/company/Liao-He-Pte-Ltd',
        shortName: 'LIAO HE',
        companyLogo: '../../../assets/images/liao_he.jpeg',
        designation: 'General Construction Worker',
        isCurrentEmployee: false,
        isFullTimeEmployee: true,
        startDate: new Date('2015-03-04'),
        endDate: new Date('2016-03-11'),
        userId: 'user124',
        experienceSection: [
          {
            experienceSectionId: 'section1',
            sectionDescription: 'General Construction Tasks: Mix, pour, and apply concrete or other building materials.',
          },
          {
            experienceSectionId: 'section2',
            sectionDescription: 'Pre-Cast Component Work: Assemble, position, and secure pre-cast concrete elements.',
          }
        ]
      }
    ];
  }


  loadEducations(): void {
    const now = new Date();

    this.educationList = [
      {
        instituteName: 'Daffodil International University',
        instituteLogo: '../../../assets/images/university_logo.png',
        department: 'B.Sc. in Computer Science and Engineering (CSE)',
        startDate: new Date('2018-01-01'),
        endDate: new Date('2022-02-22'),
        educationSection: [
          {
            educationSectionId: 'eduSec1',
            sectionDescription: 'During my university years- I actively participated in numerous programming contests including CPC and IUPC. In addition to on-site competitions I actively participated in online coding challenges on platforms Codeforces and CodeChef. Which helped to sharpen my problem-solving skills.'
          },
          {
            educationSectionId: 'eduSec2',
            sectionDescription: 'Alongside contests, I took the initiative to build several exciting and practical projects. These include a `House Price Prediction` model leveraging machine learning techniques and a lightweight desktop application like text editor called `Notepad`.'
          },
          {
            educationSectionId: 'eduSec3',
            sectionDescription: 'For undergraduate thesis, conducted research on "The Methods for Finding Eligible Employees Based on Specification". where I explored data-driven approaches to pickup the best one and rank them accordingly.'
          }
        ]
      }
    ];
  }


  loadPublication(): void {
    this.publicationList = [
      {
        publicationId: 'pub1',
        userId: 'user123',
        title: 'Methods for Finding Eligible Employees Based on Specifications',
        summary: 'This research applies data-driven techniques to assess and rank candidates based on predefined criteria. Aiming to improve the efficiency and accuracy of hiring decisions for picking up the best one and/or to identify the most weakest one.',
        journalName: 'Daffodil International University',
        date: new Date('2021-12-01'),
        keys: [
          {
            publicationKeyId: 'key1',
            key: 'AHP, MCDM, TFN'
          },
          {
            publicationKeyId: 'key2',
            key: 'FAHP, TrFN'
          },
          {
            publicationKeyId: 'key3',
            key: 'ELECTRE'
          }
        ]
      }
    ];
  }

  loadTraining(): void {
    this.trainingList = [
      {
        trainingId: 'trainingId1',
        userId: 'user123',
        title: 'Structural Steel Fitting',
        summary: 'In 2014, I embarked on a hands-on training program at SETSCO-SRCI, pausing my studies to learn building construction and steel fitting. Though it is different from my current role `Software Engineer`, the experience taught me discipline, attention to detail, and the value of learning from every challenge.',
        trainingCenterName: 'Setsco SRCI Traning & Testing Centre',
        date: new Date('2014-08-22'),
        serialNumber: "14-353",
        companyLogo: '../../../assets/images/setsco.jpeg',
        link: 'https://penguin-srci.com/training.html',
        keys: [
          {
            trainingKeyId: 'key1',
            key: 'Steel Fitting'
          },
          {
            trainingKeyId: 'key1',
            key: 'Beam/Column Design and Fitting'
          },
          {
            trainingKeyId: 'key1',
            key: 'Basic Math'
          }
        ]
      }
    ];
  }


  loadAdditionalSkill(): void {
    this.additionalSkillList = [
      {
        additionalSkillId: 'as1',
        userId: 'user123',
        title: 'Soft Skills',
        keys: [
          { additionalSkillKeyId: 'ask1', key: 'Teamwork: Enjoy collaboration and value diverse perspectives.' },
          { additionalSkillKeyId: 'ask2', key: 'Time Management: Prioritize tasks and meet deadlines efficiently.' },
          { additionalSkillKeyId: 'ask3', key: 'Adaptability: Quickly adjust to changes and challenges.' }
        ]
      },
      {
        additionalSkillId: 'as2',
        userId: 'user123',
        title: 'Tools & Technologies',
        keys: [
          { additionalSkillKeyId: 'ask4', key: 'Git: Proficient with version control and collaborative development.' },
          { additionalSkillKeyId: 'ask5', key: 'Postman: Skilled in API testing and request automation.' }
        ]
      }
    ];
  }



  loadInterest(): void {
    this.interstList = [
      {
        interestId: 'int1',
        userId: 'user123',
        title: 'Programming',
        keys: [
          { interestKeyId: 'key1', key: 'Problem Solving: solved 250+ problems on LeetCode, 200+ on Codeforces, about 100 on CodeChef; also solve problems on HackerRank regularly.' },
          { interestKeyId: 'key2', key: 'Competitive Coding' },
        ]
      },
      {
        interestId: 'int2',
        userId: 'user123',
        title: 'Technology Exploration',
        keys: [
          { interestKeyId: 'key4', key: 'AI & Machine Learning' },
          { interestKeyId: 'key5', key: 'System Design' },
          { interestKeyId: 'key6', key: 'DevOps Tools' }
        ]
      },
      {
        interestId: 'int3',
        userId: 'user123',
        title: 'Creative Activities',
        keys: [
          { interestKeyId: 'key7', key: 'UI Design' }
        ]
      },
      {
        interestId: 'int3',
        userId: 'user123',
        title: 'Hobbies and Love to Do',
        keys: [
          { interestKeyId: 'key8', key: 'Spending Quality Time with Babies' },
          { interestKeyId: 'key8', key: 'Explore new places by taking a ride on a rickshaw' },
          { interestKeyId: 'key8', key: 'Playing Caram' },
          { interestKeyId: 'key8', key: 'Chess' }
        ]
      }
    ];
  }


  loadProject(): void {
    this.projectList = [
      {
        projectId: 'p1',
        postId: 'post101',
        projectTitle: 'Personal Blog Website',
        projectSummary: `
            This is a personal blog and portfolio website where the admin can create and update posts or projects based on various topics. Public users can engage by commenting on posts or projects and subscribing for updates.

            A dedicated "About" page showcases the admin's portfolio, including employment history, academic background, interests, publications, and more.

            To ensure scalability and maintainability, the application follows a modular architecture:
            admin-blog (Admin Panel): A separate Angular application for managing content.
            frontend-blog (Public View): A distinct Angular application for public users.
            Backend: Built with .NET 8 Web API, utilizing SQL Server for data storage, Redis for distributed caching, and Redis as a message broker. The architecture follows Clean Architecture principles with CQRS for efficient data processing.
            `,
        projectSrcLink: 'https://github.com/saidul-islam-rajib/frontend-blog',
        projectImage: '../../../assets/images/personal_blog.png',
        displayDate: new Date(),
        startDate: new Date('2024-02-01'),
        endDate: new Date('2025-05-03'),
        projectSection: [
          {
            postSectionId: 'sec1',
            topicId: 't1',
            topicName: 'Backend',
            projectTags: [
              { tagId: 'tag2', projectTagName: 'Angular' },
              { tagId: 'tag2', projectTagName: '.NET' },
              { tagId: 'tag3', projectTagName: 'ASP.NET Web API ' },
              { tagId: 'tag3', projectTagName: 'RabbitMQ' },
              { tagId: 'tag3', projectTagName: 'SQL Server' },
              { tagId: 'tag3', projectTagName: 'JWT' },
              { tagId: 'tag3', projectTagName: 'Mapster' },
              { tagId: 'tag3', projectTagName: 'MediatR' },
              { tagId: 'tag3', projectTagName: 'CQRS' },
              { tagId: 'tag3', projectTagName: 'Docker' }
            ]
          }
        ]
      },
      {
        projectId: 'p1',
        postId: 'post101',
        projectTitle: 'e-Commerce Application',
        projectSummary: 'An application for ecommerce that enabling customers to seamlessly create a shopping basket, proceed to checkout and place orders. The system also incorporates a feature to apply discounts on specific products.',
        projectSrcLink: 'https://github.com/saidul-islam-rajib/ECommerce',
        projectImage: '../../../assets/images/ecommerce_application.png',
        displayDate: new Date('2024-11-01'),
        startDate: new Date('2023-02-01'),
        endDate: new Date('2023-06-30'),
        projectSection: [
          {
            postSectionId: 'sec1',
            topicId: 't1',
            topicName: 'Backend',
            projectTags: [
              { tagId: 'tag1', projectTagName: '.NET' },
              { tagId: 'tag2', projectTagName: 'ASP.NET Core' },
              { tagId: 'tag3', projectTagName: 'PostgreSQL' },
              { tagId: 'tag4', projectTagName: 'Redis' },
              { tagId: 'tag5', projectTagName: 'RabbitMQ' },
              { tagId: 'tag6', projectTagName: 'SQLite' },
              { tagId: 'tag7', projectTagName: 'Docker' },
              { tagId: 'tag8', projectTagName: 'Microservices' }
            ]
          }
        ]
      },
      {
        projectId: 'p1',
        postId: 'post101',
        projectTitle: 'Authentication Service',
        projectSummary: 'A complete and secured token based(jwt) authentication service developed using industry latest technologies like microservices. Where an authenticated user will able to login/register.',
        projectSrcLink: 'https://github.com/saidul-islam-rajib/Authentication',
        projectImage: '../../../assets/images/authentication.png',
        displayDate: new Date('2024-06-01'),
        startDate: new Date('2023-02-01'),
        endDate: new Date('2023-06-30'),
        projectSection: [
          {
            postSectionId: 'sec1',
            topicId: 't1',
            topicName: 'Backend',
            projectTags: [
              { tagId: 'tag1', projectTagName: 'C#' },
              { tagId: 'tag2', projectTagName: '.NET' },
              { tagId: 'tag3', projectTagName: 'SQL Server' },
              { tagId: 'tag4', projectTagName: 'Microservice' }
            ]
          }
        ]
      },
      {
        projectId: 'p1',
        postId: 'post101',
        projectTitle: 'Authentication Service With UI',
        projectSummary: 'A complete authentication service that enables users to register and log in through a user-friendly Angular frontend. The backend is built with .NET Web API, following Clean Architecture principles to ensure scalability and maintainability. JWT (JSON Web Token) is used for secure token-based authentication, and SQL Server is used for reliable data persistence.',
        projectSrcLink: 'https://github.com/saidul-islam-rajib/Auth',
        projectImage: '../../../assets/images/authentication.png',
        displayDate: new Date('2024-06-01'),
        startDate: new Date('2023-02-01'),
        endDate: new Date('2023-06-30'),
        projectSection: [
          {
            postSectionId: 'sec1',
            topicId: 't1',
            topicName: 'Backend',
            projectTags: [
              { tagId: 'tag1', projectTagName: 'Angular' },
              { tagId: 'tag2', projectTagName: '.NET' },
              { tagId: 'tag3', projectTagName: 'Microsoft SQL Server' },
              { tagId: 'tag4', projectTagName: 'JWT Token' }
            ]
          }
        ]
      },
      {
        projectId: 'p2',
        postId: 'post102',
        projectTitle: 'Dinner Hosting Platform',
        projectSummary: 'An ASP.NET Web API-based application designed to allow authenticated users to register, log in, and place orders from a dynamic dinner menu. The backend architecture follows the CQRS (Command Query Responsibility Segregation) and Repository Design Pattern, ensuring clear separation of concerns and maintainable code structure. The application uses SQL Server for data storage.',
        projectSrcLink: 'https://github.com/saidul-islam-rajib/Dinner_Host',
        projectImage: '../../../assets/images/dinner_host.png',
        displayDate: new Date('2024-05-01'),
        startDate: new Date('2022-08-01'),
        endDate: new Date('2022-12-01'),
        projectSection: [
          {
            postSectionId: 'sec3',
            topicId: 't3',
            topicName: 'Platform',
            projectTags: [
              { tagId: 'tag6', projectTagName: '.NET' },
              { tagId: 'tag6', projectTagName: 'DDD' },
              { tagId: 'tag6', projectTagName: 'EF' },
              { tagId: 'tag7', projectTagName: 'MediatR, JWT Token' },
              { tagId: 'tag7', projectTagName: 'Repository Design Pattern' },
              { tagId: 'tag8', projectTagName: 'Docker' }
            ]
          }
        ]
      },
      {
        projectId: 'p2',
        postId: 'post102',
        projectTitle: 'Text Editor',
        projectSummary: 'A desktop application named Notepad, developed entirely in Python using comprehensive Object-Oriented Programming (OOP) principles, ensuring modularity, reusability, and maintainability.',
        projectSrcLink: 'https://github.com/saidul-islam-rajib/Desktop_application',
        projectImage: '../../../assets/images/notepad_application.jpeg',
        displayDate: new Date('2021-08-01'),
        startDate: new Date('2022-08-01'),
        endDate: new Date('2022-12-01'),
        projectSection: [
          {
            postSectionId: 'sec3',
            topicId: 't3',
            topicName: 'Platform',
            projectTags: [
              { tagId: 'tag6', projectTagName: 'Python' },
              { tagId: 'tag6', projectTagName: 'OOP' },
              { tagId: 'tag8', projectTagName: 'tkinter' }
            ]
          }
        ]
      }
    ];
  }



  calculateDuration(startDate: Date, endDate: Date, isCurrentEmployee: boolean): string {
    if (startDate > endDate) {
      const formattedDate = startDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      return `Did not join yet! (Expecting to join by ${formattedDate})`;
    }
    const effectiveEndDate = isCurrentEmployee ? new Date() : endDate;
    return this.durationService.calculateWorkingDuration(startDate, effectiveEndDate);
  }
}
