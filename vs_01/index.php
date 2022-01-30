<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- cdn jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- cdn fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <!-- cdn google font -->
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Chakra+Petch:wght@300&family=Comfortaa:wght@300&family=Major+Mono+Display&family=Monoton&family=Montserrat:wght@300&family=Press+Start+2P&family=Syne+Mono&family=VT323&family=Xanh+Mono&display=swap" rel="stylesheet">

    <!-- common -->
    <script src="./common.min.js"></script>

    <!-- theme -->
    <link id="linkTheme" rel="stylesheet" href="./themes/classic.css" />

    <!-- app -->
    <link rel="stylesheet" href="./app.min.css" />
    <script defer src="./app.js"></script>

    <!-- favicon -->
    <link rel="icon" type="image/png" href="./img/favicon-96x96.png">

    <!-- title -->
    <title data-tr="portfolioTitle"></title>

</head>

<body>

    <!-- HEADER -->
    <header class="header">
        <nav>
            <div style="display:none;" class="show-s">
                <button id="btn-get-menu" class="btn btn-menu-rwd">
                    <i class="fas fa-ellipsis-v"></i>
                    <span id="section-name-rwd"></span>
                </button>
            </div>
            <ul class="container-links"></ul>
        </nav>
    </header>

    <!-- MAIN -->
    <main class="main">

        <!-- SECTION HOME -->
        <section id="home" class="section" data-position="1"></section>

        <!-- SECTION COURSE -->
        <section id="course" class="section primary-padding-h" data-position="2">

            <div class="subtitle-h2">
                <h2 data-tr="myCarer"></h2>
                <div class="stripe"></div>
            </div>

            <div class="flex-wrap" style="gap:16px;">

                <!-- Bachelor Marketing Web -->
                <div class="flex-value-100 head-course">
                    <div class="container">
                        <div class="subtitle-h3">
                            <h3 data-tr="2021-2022"></h3>
                            <h3 data-tr="bachelorMarketingWeb"></h3>
                            <h3 data-tr="professionalContract"></h3>
                        </div>
                    </div>
                </div>
                <div class="flex-value-50 block-course block-course-1">
                    <div class="container">
                        <div>
                            <div class="subtitle-h4">
                                <h4 data-tr="whatWeHaveStudied"></h4>
                                <div class="stripe"></div>
                            </div>
                            <ul>
                                <li data-tr="htmlCssBootstrap"></li>
                                <li data-tr="javascriptJquery"></li>
                                <li data-tr="naturalReference"></li>
                                <li data-tr="webDesignUiUx"></li>
                                <li data-tr="websiteAudit"></li>
                                <li data-tr="optimizationOfWebResources"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-value-50 block-course block-course-1">
                    <div class="container">
                        <div>
                            <div class="subtitle-h4">
                                <h4 data-tr="theTasksIPerformed"></h4>
                                <div class="stripe"></div>
                            </div>
                            <ul>
                                <li data-tr="integrationOfModels"></li>
                                <li data-tr="websiteAudit"></li>
                                <li data-tr="contentCreation"></li>
                                <li data-tr="uploadingWebsite"></li>
                                <li data-tr="wordpressCreation"></li>
                                <li data-tr="personaCreation"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- BTS SIO - SLAM -->
                <div class="flex-value-100 head-course">
                    <div class="container">
                        <div class="subtitle-h3">
                            <h3 data-tr="2019-2021"></h3>
                            <h3 data-tr="btsSioSlam"></h3>
                            <h3 data-tr="apprenticeshipContract"></h3>
                        </div>
                    </div>
                </div>
                <div class="flex-value-50 block-course block-course-2">
                    <div class="container">
                        <div>
                            <div class="subtitle-h4">
                                <h4 data-tr="whatWeHaveStudied"></h4>
                                <div class="stripe"></div>
                            </div>
                            <ul>
                                <li data-tr="algorithm"></li>
                                <li data-tr="c-c++"></li>
                                <li data-tr="java"></li>
                                <li data-tr="php"></li>
                                <li data-tr="sql"></li>
                                <li data-tr="python"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-value-50 block-course block-course-2">
                    <div class="container">
                        <div>
                            <div class="subtitle-h4">
                                <h4 data-tr="theTasksIPerformed"></h4>
                                <div class="stripe"></div>
                            </div>
                            <ul>
                                <li data-tr="creationOfABusinessFrameworkJavaScript"></li>
                                <li data-tr="developmentOfARealTimeMappingSystem"></li>
                                <li data-tr="redesignOfTheCompanysMainSite"></li>
                                <li data-tr="creationOfModelsForMobileApplications"></li>
                                <li data-tr="developmentOfManagementSoftware-C#-SQL"></li>
                                <li data-tr="integrationMissions"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Conseiller Financier -->
                <div class="flex-value-100 head-course">
                    <div class="container">
                        <div class="subtitle-h3">
                            <h3 data-tr="2015-2018"></h3>
                            <h3 data-tr="financialAdvisor"></h3>
                            <h3 data-tr="cdi"></h3>
                        </div>
                    </div>
                </div>
                <div class="flex-value-50 block-course block-course-3">
                    <div class="container">
                        <div>
                            <div class="subtitle-h4">
                                <h4 data-tr="whatILearned"></h4>
                                <div class="stripe"></div>
                            </div>
                            <ul>
                                <li data-tr="customerRelationship"></li>
                                <li data-tr="globalStudyOfAHousehold"></li>
                                <li data-tr="financialLegalEnvironment"></li>
                                <li data-tr="sellAndPromoteBankingServices"></li>
                                <li data-tr="studyALoanFile"></li>
                                <li data-tr="financialMarkets"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-value-50 block-course block-course-3">
                    <div class="container">
                        <div>
                            <div class="subtitle-h4">
                                <h4 data-tr="theTasksIPerformed"></h4>
                                <div class="stripe"></div>
                            </div>
                            <ul>
                                <li data-tr="globalManagementOfAClientPortfolio"></li>
                                <li data-tr="businessManagementAndPlanning"></li>
                                <li data-tr="welcomeWithAndWithoutAppointment"></li>
                                <li data-tr="distanceSelling"></li>
                                <li data-tr="weeklyActivityReporting"></li>
                                <li data-tr="contributionToSpecialistAdvisers"></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- SECTION SKILLS -->
        <section id="skills" class="section primary-padding-h" data-position="3">
            <div class="subtitle-h2">
                <h2 data-tr="myDeveloppmentSkills"></h2>
                <div class="stripe"></div>
            </div>
            <div class="container-block-skills">
                <div class="block-skills block-skills-1">
                    <div class="wrapper">
                        <div class="container">
                            <div class="container-title">
                                <div class="title head-title" data-tr="html"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="w3c"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="naturalReference"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="metadata"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-skills block-skills-2">
                    <div class="wrapper">
                        <div class="container">
                            <div class="container-title">
                                <div class="title head-title" data-tr="css"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="responsiveDesign"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="mobileFirst"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="bootstrap"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-skills block-skills-3">
                    <div class="wrapper">
                        <div class="container">
                            <div class="container-title">
                                <div class="title head-title" data-tr="javascript"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="frontEnd"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="vanilla"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="jquery"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-skills block-skills-4">
                    <div class="wrapper">
                        <div class="container">
                            <div class="container-title">
                                <div class="title head-title" data-tr="webDesign"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="ui-ux"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="illustrator"></div>
                            </div>
                            <div class="container-title">
                                <div class="title" data-tr="w3c"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION ROADMAP -->
        <section id="roadmap" class="section primary-padding-h" data-position="4">
            <div class="subtitle-h2">
                <h2 data-tr="myDevelopmentGoals"></h2>
                <div class="stripe"></div>
            </div>
            <div class="wrapper">
                <div class="flex-wrap" style="height: 100%;">
                    <div class="flex-value-50" style="display: flex;flex-direction: column;justify-content: space-between;">
                        <div class="container-titles">
                            <h2 class="roadmap-item title active center-xs" data-tr="roadmapTitle1"></h2>
                            <h2 class="roadmap-item title center-xs" data-tr="roadmapTitle2"></h2>
                            <h2 class="roadmap-item title center-xs" data-tr="roadmapTitle3"></h2>
                            <h2 class="roadmap-item title center-xs" data-tr="roadmapTitle4"></h2>
                            <h2 class="roadmap-item title center-xs" data-tr="roadmapTitle5"></h2>
                            <h2 class="roadmap-item title center-xs" data-tr="roadmapTitle6"></h2>
                        </div>
                        <div class="container-paragraphs">
                            <p class="roadmap-item paragraph active center-xs" data-tr="roadmapParagraph1"></p>
                            <p class="roadmap-item paragraph center-xs" data-tr="roadmapParagraph2"></p>
                            <p class="roadmap-item paragraph center-xs" data-tr="roadmapParagraph3"></p>
                            <p class="roadmap-item paragraph center-xs" data-tr="roadmapParagraph4"></p>
                            <p class="roadmap-item paragraph center-xs" data-tr="roadmapParagraph5"></p>
                            <p class="roadmap-item paragraph center-xs" data-tr="roadmapParagraph6"></p>
                        </div>
                        <div class="container-years">
                            <h3>
                                <span class="year-value"></span>
                                <span class="roadmap-item year active">8</span>
                                <span class="roadmap-item year">9</span>
                                <span class="roadmap-item year">0</span>
                                <span class="roadmap-item year">1</span>
                                <span class="roadmap-item year">2</span>
                                <span class="roadmap-item year">3</span>
                            </h3>
                        </div>
                        <div class="container-arrows">
                            <div class="container center-xs">
                                <i id="arrow-previous" class="fas fa-arrow-left disabled"></i>
                                <div class="container-counter">
                                    <span class="roadmap-item counter active">1</span>
                                    <span class="roadmap-item counter">2</span>
                                    <span class="roadmap-item counter">3</span>
                                    <span class="roadmap-item counter">4</span>
                                    <span class="roadmap-item counter">5</span>
                                    <span class="roadmap-item counter">6</span>
                                    <span class="counter-value"></span>
                                </div>
                                <i id="arrow-next" class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-value-50 hide-l">
                        <div class="container-images">
                            <img class="roadmap-item image active" src="./img/laptop-close.jpg" />
                            <img class="roadmap-item image" src="./img/laptop-half-close.jpg" />
                            <img class="roadmap-item image" src="./img/planet-logo.jpg" />
                            <img class="roadmap-item image" src="./img/face.jpg" />
                            <img class="roadmap-item image" src="./img/flower-orange.jpg" />
                            <img class="roadmap-item image" src="./img/lunch-nasa.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION CONTACT -->
        <section id="contact" class="section primary-padding-h" data-position="5">
            <div class="subtitle-h2">
                <h2 data-tr="contactMe"></h2>
                <div class="stripe"></div>
            </div>
            <div class="wrapper">
                <div class="flex-wrap" style="height: 100%;">
                    <div class="flex-value-50">
                        <div class="contact">
                            <div class="container">
                                <div class="head">
                                    <div class="container-to">
                                        <span data-tr="to:"></span>
                                        <span data-tr="myFirstname"></span>
                                    </div>
                                </div>
                                <div class="main">
                                    <ol class="list-message">
                                        <li class="bubble-message send" data-tr="contactFormWelcomeMessage"></li>
                                    </ol>
                                </div>
                                <div class="footer">
                                    <div id="btnOpenContactForm" class="container-input-btn">
                                        <input type="text" data-tr="yourMessage..." />
                                        <button class="btn-submit">
                                            <i class="fas fa-arrow-up"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-value-50">
                        <div class="container">
                            <section>
                                <div class="subtitle-h4">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="stripe" style="background:var(--primary-hover-effect);"></div>
                                </div>
                                <div data-tr="mailAccount"></div>
                            </section>
                            <section>
                                <div class="subtitle-h4">
                                    <i class="fab fa-twitter"></i>
                                    <div class="stripe" style="background:var(--primary-hover-effect);"></div>
                                </div>
                                <div data-tr="twitterAccount"></div>
                            </section>
                            <section>
                                <div class="subtitle-h4">
                                    <i class="fab fa-discord"></i>
                                    <div class="stripe" style="background:var(--primary-hover-effect);"></div>
                                </div>
                                <a href="https://discord.gg/pByUX84q" target="_blank" data-tr="discordAccount"></a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- MODAL COOKIES -->
    <div id="modal-cookies" class="modal">
        <div class="container">
            <div class="container-select-language" style="margin-bottom:40px;"></div>
            <div class="subtitle-h4" style="margin-bottom:40px;">
                <h4 data-tr="cookiesTitle"></h4>
                <div class="stripe"></div>
            </div>
            <div style="text-align:center;margin-bottom:40px;">
                <div data-tr="cookiesText"></div>
                <div style="margin-top:6px;">
                    <span>(</span>
                    <span data-tr="defaultLanguage"></span>
                    <span>&</span>
                    <span data-tr="themeChoice"></span>
                    <span>).</span>
                </div>
            </div>
            <button id="btn-accept-cookies" data-tr="understood!"></button>
        </div>
    </div>

    <!-- MODAL WELCOME BACK -->
    <div id="modal-welcome-back" class="modal">
        <div class="container">
            <div class="container-select-language"></div>
            <div class="subtitle-h4">
                <h4 data-tr="welcomeBackTitle"></h4>
                <div class="stripe"></div>
            </div>
            <div class="container-btn">
                <button id="btn-change-theme" data-tr="changeTheme?"></button>
                <button id="btn-no-thanks" data-tr="noThanks!"></button>
            </div>
        </div>
    </div>

    <!-- MODAL SETTINGS -->
    <div id="modal-settings" class="modal">
        <div class="container">
            <div class="subtitle-h4">
                <h4 data-tr="settingsTitle"></h4>
                <div class="stripe"></div>
            </div>
            <div class="items-settings">
                <div class="wrapper">
                    <div class="title">
                        <i class="fas fa-paint-brush"></i>
                        <h3 data-tr="themeChoice"></h3>
                    </div>
                    <ul id="list-themes-choice" class="list-settings-choice"></ul>
                </div>
                <div class="wrapper"></div>
            </div>
        </div>
    </div>

    <!-- MODAL CONTACT FORM -->
    <div id="modal-contact-form" class="modal">
        <div class="container">
            <div class="subtitle-h4">
                <h4 data-tr="yourTurn!"></h4>
                <div class="stripe"></div>
            </div>
            <div class="contact-form">
                <input id="user-mail" class="input-contact-form" type="mail" data-tr="mailExample" />
                <input id="user-subject" class="input-contact-form" type="text" data-tr="mailObject" />
                <textarea id="user-message" maxlength="150" class="input-contact-form" data-tr="yourMessage..."></textarea>
                <div class="contact-form-footer">
                    <div class="container-char-length">
                        <span id="char-length-value">0</span>
                        <span id="max-char-value"></span>
                    </div>
                    <div class="container-btn">
                        <button id="btn-clear-message" data-tr-title="deleteText">
                            <i class="fas fa-eraser"></i>
                        </button>
                        <button id="btn-send-mail" data-tr-title="send">
                            <i class="far fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>