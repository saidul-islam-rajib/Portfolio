import { Component, OnInit } from '@angular/core';
import { AdditionalSkill } from '../../core/interfaces/additional-skill';
import { CurrentlyLearning } from '../../core/interfaces/currently-learning';
import { Education } from '../../core/interfaces/education';
import { Experience } from '../../core/interfaces/experience';
import { Interest } from '../../core/interfaces/interest';
import { Project } from '../../core/interfaces/project';
import { Publication } from '../../core/interfaces/publication';
import { Training } from '../../core/interfaces/training';
import { UserInformation } from '../../core/interfaces/user-information';
import { AdditionalSkillService } from '../../core/services/additional-skill.service';
import { CalculateDurationService } from '../../core/services/common/calculate-duration.service';
import { CurrentlyLearningService } from '../../core/services/currently-learning.service';
import { EducationService } from '../../core/services/education.service';
import { ExperienceService } from '../../core/services/experience.service';
import { InterestService } from '../../core/services/interest.service';
import { ProjectService } from '../../core/services/project.service';
import { PublicationService } from '../../core/services/publication.service';
import { TrainingService } from '../../core/services/training.service';
import { UserInformationService } from '../../core/services/user-information.service';

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
  currentlyLearningList: CurrentlyLearning[] = [];

  get experienceYears(): string {
    const years = this.calculateYearsSinceExperience();
    return `${years}+`;
  }

  private calculateYearsSinceExperience(): number {
    const softwareExperience = this.experiences.filter((experience) =>
      /software|engineer|developer/i.test(experience.designation)
    );

    if (!softwareExperience.length) {
      return 0;
    }

    const earliestStart = softwareExperience.reduce((earliest, current) =>
      current.startDate < earliest ? current.startDate : earliest,
      softwareExperience[0].startDate
    );

    const now = new Date();
    let years = now.getFullYear() - earliestStart.getFullYear();
    const beforeAnniversary =
      now.getMonth() < earliestStart.getMonth() ||
      (now.getMonth() === earliestStart.getMonth() && now.getDate() < earliestStart.getDate());

    if (beforeAnniversary) {
      years -= 1;
    }

    return Math.max(0, years);
  }

  constructor(
    private readonly userInformationService: UserInformationService,
    private durationService: CalculateDurationService,
    private currentlyLearningService: CurrentlyLearningService,
    private trainingService: TrainingService,
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
    this.loadCurrentlyLearning();
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
            experienceSectionId: 'section1',
            sectionDescription: 'Lead end-to-end development and production support for Next.js and nopCommerce applications. Collaborate with international clients to gather requirements, deliver scalable solutions, improve performance, and manage deployments with modern DevOps practices.',
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
            sectionDescription: 'Delivered full-stack features using Angular for frontend and ASP.NET Web API for backend, while updating existing applications to meet evolving requirements.',
          },
          {
            experienceSectionId: 'section2',
            sectionDescription: 'Worked on microservice-based architecture, debugging code and improving performance in systems such as AMBS Nextgen.',
          },
          {
            experienceSectionId: 'section3',
            sectionDescription: 'Executed functional and integration testing to ensure software quality and readiness for user acceptance.',
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
            sectionDescription: 'During my university studies, I participated in programming contests such as CPC and IUPC and solved problems on Codeforces and CodeChef to strengthen algorithmic thinking and problem-solving skills.',
          },
          {
            educationSectionId: 'eduSec2',
            sectionDescription: 'Built practical projects including a house price prediction model using machine learning and a lightweight Notepad desktop application to strengthen software design and implementation skills.',
          },
          {
            educationSectionId: 'eduSec3',
            sectionDescription: 'Completed an undergraduate thesis on "Methods for Finding Eligible Employees Based on Specification," researching data-driven candidate ranking and decision support techniques.',
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
        summary: 'This research applies multi-criteria decision-making and fuzzy analytic hierarchy techniques to assess and rank candidates based on job specifications, improving the efficiency and accuracy of hiring decisions.',
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
        summary: 'In 2014, I completed hands-on training at SETSCO-SRCI, gaining practical discipline, attention to detail, and a strong commitment to learning from every challenge, which continues to support my work as a software engineer.',
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
            trainingKeyId: 'key2',
            key: 'Beam/Column Design and Fitting'
          },
          {
            trainingKeyId: 'key3',
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
        title: 'Engineering Skills',
        keys: [
          { additionalSkillKeyId: 'ask1', key: 'Full-Stack Development: Angular, React, Next.js, .NET, C#.' },
          { additionalSkillKeyId: 'ask2', key: 'Backend & APIs: ASP.NET Core, Web API, SQL Server, PostgreSQL.' },
          { additionalSkillKeyId: 'ask3', key: 'Architecture: Clean Architecture, CQRS, Microservices, Domain-Driven Design.' }
        ]
      },
      {
        additionalSkillId: 'as2',
        userId: 'user123',
        title: 'Cloud & DevOps',
        keys: [
          { additionalSkillKeyId: 'ask4', key: 'AWS: Building and deploying cloud-native applications.' },
          { additionalSkillKeyId: 'ask5', key: 'CI/CD: Jenkins, Azure DevOps, automated build and release pipelines.' },
          { additionalSkillKeyId: 'ask6', key: 'Containerization: Docker and Kubernetes for scalable deployments.' }
        ]
      },
      {
        additionalSkillId: 'as3',
        userId: 'user123',
        title: 'Tools & Collaboration',
        keys: [
          { additionalSkillKeyId: 'ask7', key: 'Git: Version control and collaborative development workflows.' },
          { additionalSkillKeyId: 'ask8', key: 'Postman: API validation and automation for backend testing.' }
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
            A modular portfolio and blogging platform built with a separate Angular admin panel and public-facing Angular site. This application has a dedicated About page for showcasing technology skills, experience, publications, and portfolio projects.

            The backend is implemented using .NET 8 Web API with SQL Server, Redis caching, and Redis messaging. The solution follows Clean Architecture principles and CQRS for predictable, maintainable server-side behavior.
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
        projectSummary: 'An ecommerce application that enables customers to build a shopping cart, checkout securely, and place orders. The platform supports product discounts and streamlines order workflows for a modern retail experience.',
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
        projectSummary: 'A secure JWT-based authentication service built with microservices principles. Users can register, log in, and maintain session security using modern token-based authorization.',
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
        projectSummary: 'A full-stack authentication system that combines an Angular frontend with a .NET Web API backend. It uses Clean Architecture, JWT for secure sessions, and SQL Server for reliable persistence.',
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

  loadCurrentlyLearning(): void {
    this.currentlyLearningService.getCurrentlyLearning().subscribe({
      next: (data) => {
        this.currentlyLearningList = data;
      },
      error: (err) => {
        console.error('Currently Learning Error:', err);
      }
    });
  }

  getProgressBarWidth(progress: number): string {
    return `${Math.min(Math.max(progress, 0), 100)}%`;
  }

  getProgressColor(progress: number): string {
    if (progress >= 80) return '#4caf50'; // Green
    if (progress >= 60) return '#ff9800'; // Orange
    if (progress >= 40) return '#2196f3'; // Blue
    return '#f44336'; // Red
  }
}
