import { MediaItem, MediaType, Image, Video } from '../models/media.model';
import { Project, ProjectId, ProjectLocation } from '../models/project.model';

export class DataStore {
  static allMedia: MediaItem[] = [
    <Video>{
      projectId: ProjectId.GardaLand,
      type: MediaType.YouTube,
      src: 'https://www.youtube.com/embed/DX6hJCFfLZ0?si=cWVW31izB-ktJyG',
      thumbSrc: 'assets/img/thumb/garda-land-04-300.jpg',
      title: 'GardaLand',
    },
    <Image>{
      projectId: ProjectId.GardaLand,
      type: MediaType.Image,
      src: 'assets/img/garda-land-01.jpg',
      thumbSrc: 'assets/img/thumb/garda-land-01-300.jpg',
      alt: 'Prezzemolo head on',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.GardaLand,
      type: MediaType.Image,
      src: 'assets/img/garda-land-02.jpg',
      thumbSrc: 'assets/img/thumb/garda-land-02-300.jpg',
      alt: 'Prezzemolo meeting girl',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.GardaLand,
      type: MediaType.Image,
      src: 'assets/img/garda-land-03.jpg',
      thumbSrc: 'assets/img/thumb/garda-land-03-300.jpg',
      alt: 'Mirror shot of Prezzemolo and girl',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.GardaLand,
      type: MediaType.Image,
      src: 'assets/img/garda-land-04.jpg',
      thumbSrc: 'assets/img/thumb/garda-land-04-300.jpg',
      alt: 'Prezzemolo and girl treetops',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.DeutscheTelekom,
      type: MediaType.Image,
      src: 'assets/img/dt-01.jpg',
      thumbSrc: 'assets/img/thumb/dt-01-300.jpg',
      alt: 'Deutsche Telekom ad',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.DeutscheTelekom,
      type: MediaType.Image,
      src: 'assets/img/dt-02.jpg',
      thumbSrc: 'assets/img/thumb/dt-02-300.jpg',
      alt: 'Deutsche Telekom ad',
      includeInGallery: false,
    },
    <Video>{
      projectId: ProjectId.DeutscheTelekom,
      type: MediaType.YouTube,
      src: 'https://www.youtube.com/embed/wAP2f8hX96I?si=MYen7uw9_YK4z7fW',
      thumbSrc: 'assets/img/thumb/dt-01-300.jpg',
      title: 'Deutsche Telekom ad',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.TheRig,
      type: MediaType.Image,
      src: 'assets/img/the-rig-01.jpg',
      thumbSrc: 'assets/img/thumb/the-rig-01-300.jpg',
      alt: 'The Rig ad',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.TheRig,
      type: MediaType.Image,
      src: 'assets/img/the-rig-02.jpg',
      thumbSrc: 'assets/img/thumb/the-rig-02-300.jpg',
      alt: 'The Rig ad',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.TheRig,
      type: MediaType.Image,
      src: 'assets/img/the-rig-03.jpg',
      thumbSrc: 'assets/img/thumb/the-rig-03-300.jpg',
      alt: 'The Rig ad',
      includeInGallery: false,
    },
    <Video>{
      projectId: ProjectId.TheRig,
      type: MediaType.YouTube,
      src: 'https://www.youtube.com/embed/tLSp1yRk_sY?si=2eC0vkr6p_6slRWp',
      thumbSrc: 'assets/img/thumb/the-rig-02-300.jpg',
      title: 'The Rig ad',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.CandyCrush,
      type: MediaType.Image,
      src: 'assets/img/candy-crush-01.jpg',
      thumbSrc: 'assets/img/thumb/candy-crush-01-300.jpg',
      alt: 'Candy Crush ad',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.CandyCrush,
      type: MediaType.Image,
      src: 'assets/img/candy-crush-02.jpg',
      thumbSrc: 'assets/img/thumb/candy-crush-02-300.jpg',
      alt: 'Candy Crush ad',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.CandyCrush,
      type: MediaType.Image,
      src: 'assets/img/candy-crush-03.jpg',
      thumbSrc: 'assets/img/thumb/candy-crush-03-300.jpg',
      alt: 'Candy Crush ad',
      includeInGallery: false,
    },
    <Video>{
      projectId: ProjectId.CandyCrush,
      type: MediaType.Vimeo,
      src: 'https://player.vimeo.com/video/865493580',
      thumbSrc: 'assets/img/thumb/candy-crush-01-300.jpg',
      title: 'Candy Crush ad',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.Rise,
      type: MediaType.Image,
      src: 'assets/img/rise-01.jpg',
      thumbSrc: 'assets/img/thumb/rise-01-300.jpg',
      alt: 'Rise ad',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.Rise,
      type: MediaType.Image,
      src: 'assets/img/rise-02.jpg',
      thumbSrc: 'assets/img/thumb/rise-02-300.jpg',
      alt: 'Rise ad',
      includeInGallery: false,
    },
    <Video>{
      projectId: ProjectId.Rise,
      type: MediaType.YouTube,
      src: 'https://www.youtube.com/embed/BJnhsF1ST_U?si=qWmNa-addJuvXk_F',
      thumbSrc: 'assets/img/thumb/rise-01-300.jpg',
      title: 'Rise ad',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.Celebrity,
      type: MediaType.Image,
      src: 'assets/img/im-a-celeb-01.jpg',
      thumbSrc: 'assets/img/thumb/im-a-celeb-01-300.jpg',
      alt: 'I\'m Celebrity... Get Me Out of Here! ad',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.Celebrity,
      type: MediaType.Image,
      src: 'assets/img/im-a-celeb-02.jpg',
      thumbSrc: 'assets/img/thumb/im-a-celeb-02-300.jpg',
      alt: 'I\'m Celebrity... Get Me Out of Here! ad',
      includeInGallery: false,
    },
    <Video>{
      projectId: ProjectId.Celebrity,
      type: MediaType.YouTube,
      src: 'https://www.youtube.com/embed/lYa2hJ0Qki0?si=WlLdSyYVIOQgJCzR',
      thumbSrc: 'assets/img/thumb/im-a-celeb-01-300.jpg',
      title: 'I\'m Celebrity... Get Me Out of Here! ad',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.Zegna,
      type: MediaType.Image,
      src: 'assets/img/zegna.jpg',
      thumbSrc: 'assets/img/thumb/zegna-300.jpg',
      alt: 'Zegna ad',
      includeInGallery: true,
    },
    <Video>{
      projectId: ProjectId.Zegna,
      type: MediaType.Vimeo,
      src: 'https://player.vimeo.com/video/687197952',
      thumbSrc: 'assets/img/thumb/zegna-300.jpg',
      title: 'Zegna ad',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.Christmas2020,
      type: MediaType.Image,
      src: 'assets/img/tort-tube.png',
      thumbSrc: 'assets/img/thumb/tort-tube-300.png',
      alt: 'Tortoise on floor of london underground train',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.Christmas2020,
      type: MediaType.Image,
      src: 'assets/img/tort-shop.png',
      thumbSrc: 'assets/img/thumb/tort-shop-300.png',
      alt: 'Tortoise on shop floor',
      includeInGallery: true,
    },
    <Video>{
      projectId: ProjectId.Christmas2020,
      type: MediaType.Vimeo,
      src: 'https://player.vimeo.com/video/687728544?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write',
      thumbSrc: 'assets/img/thumb/tort-300.png',
      title: 'Saddington Baynes Christmas 2020',
    },
    <Image>{
      projectId: ProjectId.WhatNow,
      type: MediaType.Image,
      src: 'assets/img/what-now.png',
      thumbSrc: 'assets/img/thumb/what-now-300.png',
      alt: 'Toolbox that says "What now?"',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.Dosist,
      type: MediaType.Image,
      src: 'assets/img/dosist7.png',
      thumbSrc: 'assets/img/thumb/dosist7-300.png',
      alt: 'Arrangement of Dosist products',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.NewBalance,
      type: MediaType.Image,
      src: 'assets/img/new-balance.jpg',
      thumbSrc: 'assets/img/thumb/new-balance-300.jpg',
      alt: 'New Balance shoe with unique fabric pattern',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.ReggieRobot,
      type: MediaType.Image,
      src: 'assets/img/robot-fjord.png',
      thumbSrc: 'assets/img/thumb/robot-fjord-300.png',
      alt: 'Giant robot standing over a fjord',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.ReggieRobot,
      type: MediaType.Image,
      src: 'assets/img/robot-double.png',
      thumbSrc: 'assets/img/thumb/robot-double-300.png',
      alt: 'Two versions of a toy robot',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.EsteeLauder,
      type: MediaType.Image,
      src: 'assets/img/estee-lauder.png',
      thumbSrc: 'assets/img/thumb/estee-lauder-300.png',
      alt: 'Estee Lauder products',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.IceCave,
      type: MediaType.Image,
      src: 'assets/img/icecave.png',
      thumbSrc: 'assets/img/thumb/icecave-300.png',
      alt: 'Ice cave in the desert',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaAccord,
      type: MediaType.Image,
      src: 'assets/img/accord-2.png',
      thumbSrc: 'assets/img/thumb/accord-2-300.png',
      alt: 'Honda Accord seat',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.HondaAccord,
      type: MediaType.Image,
      src: 'assets/img/accord-7.png',
      thumbSrc: 'assets/img/thumb/accord-7-300.png',
      alt: 'Honda Accord wheel',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaAccord,
      type: MediaType.Image,
      src: 'assets/img/accord-1.png',
      thumbSrc: 'assets/img/thumb/accord-1-300.png',
      alt: 'Honda Accord side profile',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaAccord,
      type: MediaType.Image,
      src: 'assets/img/accord-3.png',
      thumbSrc: 'assets/img/thumb/accord-3-300.png',
      alt: 'Honda Accord wheel close up',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.Acadia,
      type: MediaType.Image,
      src: 'assets/img/brain-transform.png',
      thumbSrc: 'assets/img/thumb/brain-transform-300.png',
      alt: 'Metaphorical image of a hallucinations disappearing in a brain ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaCRV,
      type: MediaType.Image,
      src: 'assets/img/honda-crv1.jpg',
      thumbSrc: 'assets/img/thumb/honda-crv1-300.jpg',
      alt: 'Image of a Honda CRV car boot ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaCRV,
      type: MediaType.Image,
      src: 'assets/img/honda-crv2.png',
      thumbSrc: 'assets/img/thumb/honda-crv2-300.png',
      alt: 'Image of a Honda CRV car dashboard ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaCoupe,
      type: MediaType.Image,
      src: 'assets/img/honda-coupe-1.png',
      thumbSrc: 'assets/img/thumb/honda-coupe-1-300.png',
      alt: 'Image of a Honda Civic Coupe front seat ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaCoupe,
      type: MediaType.Image,
      src: 'assets/img/honda-coupe-2.png',
      thumbSrc: 'assets/img/thumb/honda-coupe-2-300.png',
      alt: 'Image of a Honda Civic Coupe back seat ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaCoupe,
      type: MediaType.Image,
      src: 'assets/img/honda-coupe-3.png',
      thumbSrc: 'assets/img/thumb/honda-coupe-3-300.png',
      alt: 'Image of a Honda Civic Coupe gear stick ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaSedan,
      type: MediaType.Image,
      src: 'assets/img/honda-sedan-1.png',
      thumbSrc: 'assets/img/thumb/honda-sedan-1-300.png',
      alt: 'Image of a Honda Civic Sedan sunroof ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaSedan,
      type: MediaType.Image,
      src: 'assets/img/honda-sedan-2.png',
      thumbSrc: 'assets/img/thumb/honda-sedan-2-300.png',
      alt: 'Image of a Honda Civic Sedan folded backseat ',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.HondaSedan,
      type: MediaType.Image,
      src: 'assets/img/honda-sedan-12.png',
      thumbSrc: 'assets/img/thumb/honda-sedan-12-300.png',
      alt: 'Image of a Honda Civic Sedan cream seats ',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.HondaSedan,
      type: MediaType.Image,
      src: 'assets/img/honda-sedan-10.png',
      thumbSrc: 'assets/img/thumb/honda-sedan-10-300.png',
      alt: 'Image of a Honda Civic Sedan grey seats ',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.HondaSedan,
      type: MediaType.Image,
      src: 'assets/img/honda-sedan-8.png',
      thumbSrc: 'assets/img/thumb/honda-sedan-8-300.png',
      alt: 'Image of a Honda Civic Sedan black seats ',
      includeInGallery: false,
    },
    <Image>{
      projectId: ProjectId.HondaSedan,
      type: MediaType.Image,
      src: 'assets/img/honda-sedan-7.png',
      thumbSrc: 'assets/img/thumb/honda-sedan-7-300.png',
      alt: 'Image of a Honda Civic Sedan back seats ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.HondaSensing,
      type: MediaType.Image,
      src: 'assets/img/honda-sensing.png',
      thumbSrc: 'assets/img/thumb/honda-sensing-300.png',
      alt: 'Image of a Honda car sensing system ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.AlexiaFarm,
      type: MediaType.Image,
      src: 'assets/img/potato.png',
      thumbSrc: 'assets/img/thumb/potato-300.png',
      alt: 'Image of a hand pulling potatoes from the earth ',
      includeInGallery: true,
    },
    <Image>{
      projectId: ProjectId.PocketCamera,
      type: MediaType.Vimeo,
      src: 'https://player.vimeo.com/video/94460122?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write',
      thumbSrc: 'assets/img/thumb/folding-camera-300.tif',
      alt: 'A camera that folds ',
      includeInGallery: true,
    },
    <Video>{
      projectId: ProjectId.Scorpion,
      type: MediaType.Vimeo,
      src: 'https://player.vimeo.com/video/78266369?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write',
      thumbSrc: 'assets/img/thumb/scorpion-300.tif',
      title: 'Image of an animated, metallic scorpion',
      includeInGallery: true,
    },
  ];

  static allProjects: Project[] = [
    {
      id: ProjectId.GardaLand,
      yearWorkedOn: 2025,
      location: ProjectLocation.Absolute,
      title: 'GardaLand',
      paragraph1: 'To celebrate the 50th Anniversary of Gardaland, I worked as part of a team to create the Italian icon, Prezzemolo, as a character in the real world. Using Solaris to bring Prezzemolo to life, I worked on shading, layout, lighting and rendering.',
    },
    {
      id: ProjectId.DeutscheTelekom,
      yearWorkedOn: 2024,
      location: ProjectLocation.Absolute,
      title: 'Deutsche Telekom',
      paragraph1: 'This ad for Deutsche Telekom features a cat called Peter, who has joined the family’s phone plan. For this project as part of a team, I replaced his arms in CG so he could hold and control a phone. I shaded the fur, and as part of a team did layout, animation, lighting and rendering using a combination of Maya and Solaris.',
    },
    {
      id: ProjectId.TheRig,
      yearWorkedOn: 2024,
      location: ProjectLocation.Absolute,
      title: 'The Rig',
      paragraph1: '‘The Rig’ is a supernatural thriller produced by Amazon Original. I worked on the second series of the show, working as part of a team on an underwater sequence. I worked on mainly previs, layout, lighting and rendering, as well as modelling and shading of an environment in the first shot below.',
    },
    {
      id: ProjectId.CandyCrush,
      yearWorkedOn: 2023,
      location: ProjectLocation.Absolute,
      title: 'Candy Crush',
      paragraph1: 'Candy Crush - Float was part of a series to advertise the mobile game “Candy Crush”. On this project I used Solaris to shade, light and render all shots, creating a vibrant, yet still dream-like world.',
    },
    {
      id: ProjectId.Rise,
      yearWorkedOn: 2023,
      location: ProjectLocation.Absolute,
      title: 'Rise',
      paragraph1: 'Rise is a short film by the director “SHIRZAN”, released for Nowruz in 2023 to highlight the oppression of women in Iran and to amplify their stories. My role on this project was to layout, texture, light and animate the butterflies seen in the final scenes of the film.',
    },
    {
      id: ProjectId.Celebrity,
      yearWorkedOn: 2022,
      location: ProjectLocation.Absolute,
      title: 'I\'m Celebrity... Get Me Out of Here!',
      paragraph1: 'To advertise the release of the 2022 series of “I’m A Celeb…”, we helped take Ant and Dec to the skies of Australia, and then back to the ground again. As part of a team on this project,  I lit and rendered the helicopter along with some additional shading, animated Ant sidestepping and jumping out of the helicopter on distant shots and textured the parachutes that brought them to safety.',
    },
    {
      id: ProjectId.IceCave,
      yearWorkedOn: 2018,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Ice Cave',
      paragraph1: `For this project I modelled, textured, lit and rendered the interior 
      of this ice cave, which was integrated with a backplate done by the retouching team at 
      Saddington Baynes.`,
      paragraph2: `To achieve this, I blocked out the cave in Maya and sculpted more detail in zBrush. I then textured the cave using Substance Painter in various styles for the retouch team to have quick flexibility for imagining the final interior.  This was a challenge due to the final image resolution being 16k. It was then lit and rendered using Vray.`,
    },
    {
      id: ProjectId.Christmas2020,
      yearWorkedOn: 2020,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Saddington Baynes Christmas 2020',
      paragraph1:
        'The Christmas card by Saddington Baynes in 2020 was a recap of each month of the events of 2020 from the perspective of a tortoise. ',
    },
    {
      id: ProjectId.WhatNow,
      yearWorkedOn: 2020,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'What Now?',
      paragraph1:
        'I modelled and textured the toolbox and its contents, as well as lighting and rendering the final image at 12k resolution. The toolbox was made using Maya, zBrush, and Substance Painter, and was rendered using Vray.',
    },
    {
      id: ProjectId.Dosist,
      yearWorkedOn: 2020,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Dosist',
      paragraph1:
        'The products for this campaign were modelled from real life reference rather than using CAD data, measuring and modelling to ensure they were accurate. This was done in Maya, and then textured to ensure a realistic, natural paper feel.',
    },
    {
      id: ProjectId.NewBalance,
      yearWorkedOn: 2020,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'New Balance',
      paragraph1:
        "This project was done to learn how to use Substance Designer and realise it's potential for creating unique fabric patterns.",
    },
    {
      id: ProjectId.Zegna,
      yearWorkedOn: 2019,
      location: ProjectLocation.Absolute,
      title: 'Ermenegildo Zegna',
      paragraph1: 'To advertise the set of XXX fragrances by Ermenegildo Zegna, I created an industrial environment for the bottle to sit in. I also remodelled CAD supplied by the client to then blend from a “normal” shaped bottle, to the “melted” bottle.',
    },
    {
      id: ProjectId.ReggieRobot,
      yearWorkedOn: 2019,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Reggie the Robot',
      paragraph1:
        'Reggie the Robot was first created as part of a series of images of classic childhood toys living in the real world. Once the character was created, he was then used as the Saddington Baynes mascot and has featured in various RnD pieces since.',
    },
    {
      id: ProjectId.EsteeLauder,
      yearWorkedOn: 2019,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Estée Lauder - RnD',
      paragraph1:
        'This image was created as part of an RnD project to demonstrate the power of CGI to create product imagery for beauty campaigns. ',
    },
    {
      id: ProjectId.HondaAccord,
      yearWorkedOn: 2017,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Honda Accord',
      paragraph1:
        'For the Honda Accord I was lighting and rendering the shots below, as well as adjusting shaders when necessary for a shot. Additionally to this I lit and rendered animations that could be seamlessly linked together in different sequences.',
    },
    {
      id: ProjectId.Acadia,
      yearWorkedOn: 2016,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'ACADIA - Transform the Brain',
      paragraph1:
        "This was an advertisement created to demonstrate the confusing and overwhelming hallucinations caused by Parkinson's Disease, which are subsequently reduced by the drug produced by ACADIA. For this project, I textured various assets such as the snake, bugs and the girl in a vivid and other-worldly manner.",
    },
    {
      id: ProjectId.HondaCRV,
      yearWorkedOn: 2017,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Honda C-RV',
      paragraph1:
        'For the C-RV I lit location and studio images, as well as modelling and prepping props required for the shots.',
    },
    {
      id: ProjectId.HondaCoupe,
      yearWorkedOn: 2017,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Honda C-RV',
      paragraph1:
        'For the C-RV I lit location and studio images, as well as modelling and prepping props required for the shots.',
    },
    {
      id: ProjectId.HondaSedan,
      yearWorkedOn: 2015,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Honda Sedan',
      paragraph1:
        'This was my first project doing automotive work, and definitely improved my lighting in a short amount of time, technically and creatively. For these shots I was responsible for lighting and rendering, as well as resolving any shading or product issues that were discovered along the way.',
    },
    {
      id: ProjectId.HondaSensing,
      yearWorkedOn: 2015,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Honda Sensing',
      paragraph1:
        'For this project I was working as an environment artist which included modelling, texturing and laying out assets in various scenes. Additionally, once the animation was completed, I streamlined the scenes for creating stills from five of the shots so cars could be replaced in the scenes.',
    },
    {
      id: ProjectId.AlexiaFarm,
      yearWorkedOn: 2015,
      location: ProjectLocation.SaddingtonBaynes,
      title: 'Alexia: Farm to Flavour',
      paragraph1:
        'I was responsible for texturing the potatoes, leaves and for additional rendering.',
    },
    {
      id: ProjectId.PocketCamera,
      yearWorkedOn: 2014,
      location: ProjectLocation.University,
      title: 'Folding Pocket Camera',
      paragraph1:
        'This is my final major project, which I have applied all my knowledge I have gained in the past three years at University, as well as what I was researching for my dissertation. My dissertation is focused on composition, global illumination and texturing, as I felt these were aspects that made a shot look good as well as realistic.',
      paragraph2:
        "I modelled the camera in Maya, sculpted broad and fine displacement in zBrush and Mari, textured in Mari, and rendered the shot in Vray. Like previous projects, I composited the layers together in Nuke and tweaked any areas I wasn't completely happy with. I rendered the shots using Vray physical camera, as I was comparing the difference between this and the zDepth pass.",
    },
    {
      id: ProjectId.Scorpion,
      yearWorkedOn: 2014,
      location: ProjectLocation.University,
      title: 'Scorpion',
      paragraph1: `The Scorpion was my first project of third year, which I was inspired to do by the mechanical creatures created by A Mechanical Mind, and it took six weeks to do. I used this project as an opportunity to properly understand how to use texturing and shaders to achieve realistic results. By this stage, I had improved my understanding of Vray, and managed to render with minimal problems. Whilst doing this project, I also was doing a research project on lighting techniques, which I incorporated into the project by using a reverse key light to accentuate the curve of the scorpion.`,
    },
  ];
}
