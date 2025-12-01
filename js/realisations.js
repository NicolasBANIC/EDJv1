/**
 * Réalisations Gallery Module
 * Handles project grid rendering and modal gallery behavior
 */

(function() {
    'use strict';
    
    // Prevent multiple initializations
    if (window.__realisationsInitialized) {
        return;
    }
    window.__realisationsInitialized = true;

// Project Data
const projectData = {
    "proj_38395534": {
"id": "proj_38395534",
"title": "Aménagement extérieur à Geispolsheim",
"category": "amenagement",
"description": "Aménagement extérieur complet à Geispolsheim. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.19_2d9038ed.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.19_2d9038ed.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.19_3e7420e1.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.19_fc7483b2.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_23aadc2f.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_271ab69d.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_524158f7.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_56b0b0db.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_651c19b9.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_77f806a6.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_97725ab8.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_bd5b2dca.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_c5ff17d3.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_d5c63859.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_dc1858e4.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_de12a7d8.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Image 2025-11-26 à 00.22.20_edaa138f.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur geispolsheim/WhatsApp Vidéo 2025-11-26 à 00.18.30_9664c160.mp4",
        "type": "video"
    }
],
"location": "Geispolsheim"
    },
    "proj_34892648": {
"id": "proj_34892648",
"title": "Aménagement extérieur à Lingolsheim",
"category": "amenagement",
"description": "Aménagement extérieur complet à Lingolsheim. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier aménagement extérieur Lingolsheim/WhatsApp Image 2025-11-24 à 00.01.58_0cf9da2b.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Lingolsheim/WhatsApp Image 2025-11-24 à 00.01.58_0cf9da2b.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Lingolsheim/WhatsApp Image 2025-11-24 à 00.01.58_1b3f2911.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Lingolsheim/WhatsApp Image 2025-11-24 à 00.01.58_2283655f.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Lingolsheim/WhatsApp Image 2025-11-24 à 00.01.58_c996006e.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Lingolsheim/WhatsApp Image 2025-11-24 à 00.01.58_dbcad4da.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Lingolsheim/WhatsApp Image 2025-11-24 à 00.01.58_ddf10f22.jpg",
        "type": "image"
    }
],
"location": "Lingolsheim"
    },
    "proj_32372833": {
"id": "proj_32372833",
"title": "Aménagement extérieur à Neuhof",
"category": "amenagement",
"description": "Aménagement extérieur complet à Neuhof. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.20_3fabf102.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.20_3fabf102.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.20_817dd706.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.20_8c6a3481.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.20_bb9bb2d3.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.20_ef34ded5.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.21_6c6bf442.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.21_f15dec78.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Noheuf/WhatsApp Image 2025-11-26 à 01.19.21_f50ef725.jpg",
        "type": "image"
    }
],
"location": "Neuhof"
    },
    "proj_73945047": {
"id": "proj_73945047",
"title": "Aménagement extérieur à Strasbourg-Robertsau",
"category": "amenagement",
"description": "Aménagement extérieur complet à Strasbourg-Robertsau. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier aménagement extérieur Strasbourg Robertseau/WhatsApp Image 2025-11-25 à 23.55.03_24a33692.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Strasbourg Robertseau/WhatsApp Image 2025-11-25 à 23.55.03_24a33692.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Strasbourg Robertseau/WhatsApp Image 2025-11-25 à 23.55.03_2d3b14fa.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Strasbourg Robertseau/WhatsApp Image 2025-11-25 à 23.55.03_4d5d2a5e.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Strasbourg Robertseau/WhatsApp Image 2025-11-25 à 23.55.03_ad218f93.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Strasbourg Robertseau/WhatsApp Vidéo 2025-11-25 à 23.55.10_52bb5f06.mp4",
        "type": "video"
    }
],
"location": "Strasbourg-Robertsau"
    },
    "proj_28927928": {
"id": "proj_28927928",
"title": "Aménagement extérieur à Metz",
"category": "amenagement",
"description": "Aménagement extérieur complet à Metz. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.23_01a0dd6f.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.23_01a0dd6f.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.23_2afce198.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.23_82527d1d.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.23_a5672d7b.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.23_a825e9c9.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.23_c8a9815a.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.23_fcd873f1.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.24_01cb35c7.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.24_2038e14b.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier aménagement extérieur Metz/WhatsApp Image 2025-11-26 à 01.28.24_5b279546.jpg",
        "type": "image"
    }
],
"location": "Metz"
    },
    "proj_31805786": {
"id": "proj_31805786",
"title": "Création d'un enrobé à Duttlenheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Duttlenheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier création  enrobé Dahluden/WhatsApp Image 2025-11-26 à 00.13.40_197fd9d9.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier création  enrobé Dahluden/WhatsApp Image 2025-11-26 à 00.13.40_197fd9d9.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création  enrobé Dahluden/WhatsApp Image 2025-11-26 à 00.13.40_32c82026.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création  enrobé Dahluden/WhatsApp Image 2025-11-26 à 00.13.40_c594c689.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création  enrobé Dahluden/WhatsApp Image 2025-11-26 à 00.13.40_f158f67a.jpg",
        "type": "image"
    }
],
"location": "Duttlenheim"
    },
    "proj_29324363": {
"id": "proj_29324363",
"title": "Création d'une allée en dalle d'ardoise",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Strasbourg. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier Création aller dalle ardoise/WhatsApp Image 2025-11-26 à 01.25.54_482c97f3.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier Création aller dalle ardoise/WhatsApp Image 2025-11-26 à 01.25.54_482c97f3.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier Création aller dalle ardoise/WhatsApp Image 2025-11-26 à 01.25.54_53cfe3ae.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier Création aller dalle ardoise/WhatsApp Image 2025-11-26 à 01.25.54_837a915a.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier Création aller dalle ardoise/WhatsApp Image 2025-11-26 à 01.25.54_edc662fb.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier Création aller dalle ardoise/WhatsApp Image 2025-11-26 à 01.25.55_7409a942.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier Création aller dalle ardoise/WhatsApp Image 2025-11-26 à 01.25.55_8be28f1f.jpg",
        "type": "image"
    }
],
"location": "Strasbourg"
    },
    "proj_77188158": {
"id": "proj_77188158",
"title": "Création d'un bac à fleurs de jardin à Eschau",
"category": "amenagement",
"description": "Aménagement extérieur complet à Eschau. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier création bac à fleur  jardin Eschau/WhatsApp Image 2025-11-26 à 01.29.28_8aa1fd9c.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier création bac à fleur  jardin Eschau/WhatsApp Image 2025-11-26 à 01.29.28_8aa1fd9c.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création bac à fleur  jardin Eschau/WhatsApp Image 2025-11-26 à 01.29.29_6db2a7d4.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création bac à fleur  jardin Eschau/WhatsApp Image 2025-11-26 à 01.29.29_8fa2d3f7.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création bac à fleur  jardin Eschau/WhatsApp Image 2025-11-26 à 01.29.29_ad5e6d7e.jpg",
        "type": "image"
    }
],
"location": "Eschau"
    },
    "proj_76892784": {
"id": "proj_76892784",
"title": "Création d'un socle béton pour boîte aux lettres à Eckbolsheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Eckbolsheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier création béton boîte au lettre Eckbolsheim/WhatsApp Image 2025-11-26 à 00.26.25_2484b8f2.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier création béton boîte au lettre Eckbolsheim/WhatsApp Image 2025-11-26 à 00.26.25_2484b8f2.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création béton boîte au lettre Eckbolsheim/WhatsApp Image 2025-11-26 à 00.26.25_a0ac9010.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création béton boîte au lettre Eckbolsheim/WhatsApp Image 2025-11-26 à 00.26.25_ab933e07.jpg",
        "type": "image"
    }
],
"location": "Eckbolsheim"
    },
    "proj_27979384": {
"id": "proj_27979384",
"title": "Réalisation d'un crépi à Duttlenheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Duttlenheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier Création crépi donnenheim/WhatsApp Image 2025-11-26 à 01.37.29_1c4d5bf6.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier Création crépi donnenheim/WhatsApp Image 2025-11-26 à 01.37.29_1c4d5bf6.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier Création crépi donnenheim/WhatsApp Image 2025-11-26 à 01.37.30_87fa4201.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier Création crépi donnenheim/WhatsApp Image 2025-11-26 à 01.37.30_92fe189d.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier Création crépi donnenheim/WhatsApp Vidéo 2025-11-26 à 01.37.30_f9fa295f.mp4",
        "type": "video"
    }
],
"location": "Duttlenheim"
    },
    "proj_36344588": {
"id": "proj_36344588",
"title": "Création d'un mur avec couvertine et crépi à Obernai",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Obernai. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.02_f2e206a8.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.02_f2e206a8.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.03_1279eb99.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.03_136a33c1.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.03_16e92c90.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.03_8c5d0963.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.03_97bd38dd.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.03_d4abd66c.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur -Couvertine -Crepi à Obernai/WhatsApp Image 2025-11-26 à 00.03.03_f5c1ee36.jpg",
        "type": "image"
    }
],
"location": "Obernai"
    },
    "proj_61910349": {
"id": "proj_61910349",
"title": "Création d'un mur à Achenheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Achenheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier création mur Achenheim/WhatsApp Image 2025-11-26 à 01.14.39_02fe6641.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier création mur Achenheim/WhatsApp Image 2025-11-26 à 01.14.39_02fe6641.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur Achenheim/WhatsApp Image 2025-11-26 à 01.14.39_27b49ae1.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur Achenheim/WhatsApp Image 2025-11-26 à 01.14.39_63edfc1c.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur Achenheim/WhatsApp Image 2025-11-26 à 01.14.39_aba9f1ba.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur Achenheim/WhatsApp Vidéo 2025-11-26 à 01.14.39_bc05a1f3.mp4",
        "type": "video"
    }
],
"location": "Achenheim"
    },
    "proj_61483516": {
"id": "proj_61483516",
"title": "Création d'un mur et crépi à Wittersheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Wittersheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier création mur et crépi wittersheim/WhatsApp Image 2025-11-26 à 01.35.26_0820de25.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier création mur et crépi wittersheim/WhatsApp Image 2025-11-26 à 01.35.26_0820de25.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur et crépi wittersheim/WhatsApp Image 2025-11-26 à 01.35.26_49816e45.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur et crépi wittersheim/WhatsApp Image 2025-11-26 à 01.35.26_6dac28fb.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur et crépi wittersheim/WhatsApp Image 2025-11-26 à 01.35.26_76774561.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur et crépi wittersheim/WhatsApp Image 2025-11-26 à 01.35.26_c014ed41.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur et crépi wittersheim/WhatsApp Image 2025-11-26 à 01.35.26_d2c7f2fe.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier création mur et crépi wittersheim/WhatsApp Image 2025-11-26 à 01.35.26_d3c06b9b.jpg",
        "type": "image"
    }
],
"location": "Wittersheim"
    },
    "proj_80728375": {
"id": "proj_80728375",
"title": "Réalisation d'un crépi à Eckwersheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Eckwersheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier crépi eckwersheim/WhatsApp Image 2025-11-26 à 01.23.35_03b57d78.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier crépi eckwersheim/WhatsApp Image 2025-11-26 à 01.23.35_03b57d78.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier crépi eckwersheim/WhatsApp Image 2025-11-26 à 01.23.35_57adac9b.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier crépi eckwersheim/WhatsApp Image 2025-11-26 à 01.23.35_61708d3b.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier crépi eckwersheim/WhatsApp Image 2025-11-26 à 01.23.35_69f27165.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier crépi eckwersheim/WhatsApp Image 2025-11-26 à 01.23.35_e1bd5654.jpg",
        "type": "image"
    }
],
"location": "Eckwersheim"
    },
    "proj_71151617": {
"id": "proj_71151617",
"title": "Création d'une dalle béton à Molsheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Molsheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier dalle béton molsheim/WhatsApp Image 2025-11-26 à 00.04.15_e0d4b40f.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier dalle béton molsheim/WhatsApp Image 2025-11-26 à 00.04.15_e0d4b40f.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier dalle béton molsheim/WhatsApp Image 2025-11-26 à 00.06.04_627e9a16.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier dalle béton molsheim/WhatsApp Image 2025-11-26 à 00.06.04_c10c2e52.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier dalle béton molsheim/WhatsApp Image 2025-11-26 à 00.06.04_d76a274e.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier dalle béton molsheim/WhatsApp Image 2025-11-26 à 00.06.05_8c6e93ba.jpg",
        "type": "image"
    }
],
"location": "Molsheim"
    },
    "proj_52784671": {
"id": "proj_52784671",
"title": "Création d'escaliers en granit à Illkirch",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Illkirch. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier escaliers granite Illkirch/WhatsApp Image 2025-11-26 à 01.33.19_1702f6b5.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier escaliers granite Illkirch/WhatsApp Image 2025-11-26 à 01.33.19_1702f6b5.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier escaliers granite Illkirch/WhatsApp Image 2025-11-26 à 01.33.19_2f99c3d9.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier escaliers granite Illkirch/WhatsApp Image 2025-11-26 à 01.33.19_56c647f3.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier escaliers granite Illkirch/WhatsApp Image 2025-11-26 à 01.33.19_be69fdf4.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier escaliers granite Illkirch/WhatsApp Image 2025-11-26 à 01.33.19_f7324da7.jpg",
        "type": "image"
    }
],
"location": "Illkirch"
    },
    "proj_49442591": {
"id": "proj_49442591",
"title": "Réalisation d'un macadam enrobé à Haguenau",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Haguenau. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.18.15_447a07f4.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.18.15_447a07f4.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.19.20_39567ed7.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.19.20_85aba131.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.19.20_8fc363f2.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.19.20_a1ed753b.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.19.20_deefa490.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.19.21_4493c2e1.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier macadam enrobé Hagneau/WhatsApp Image 2025-11-26 à 01.19.21_fa292b37.jpg",
        "type": "image"
    }
],
"location": "Haguenau"
    },
    "proj_87368097": {
"id": "proj_87368097",
"title": "Création d'un mur et palissades en granit à Schiltigheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Schiltigheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier mur palissades granite Schiltigheim/WhatsApp Image 2025-11-26 à 00.58.29_043bf653.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier mur palissades granite Schiltigheim/WhatsApp Image 2025-11-26 à 00.58.29_043bf653.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier mur palissades granite Schiltigheim/WhatsApp Image 2025-11-26 à 01.00.46_8e0e9f22.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier mur palissades granite Schiltigheim/WhatsApp Image 2025-11-26 à 01.00.47_04f86783.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier mur palissades granite Schiltigheim/WhatsApp Image 2025-11-26 à 01.00.47_1ac83476.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier mur palissades granite Schiltigheim/WhatsApp Image 2025-11-26 à 01.00.47_1b891837.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier mur palissades granite Schiltigheim/WhatsApp Image 2025-11-26 à 01.00.47_548b9332.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier mur palissades granite Schiltigheim/WhatsApp Image 2025-11-26 à 01.00.47_defbef83.jpg",
        "type": "image"
    }
],
"location": "Schiltigheim"
    },
    "proj_83571895": {
"id": "proj_83571895",
"title": "Réalisation d'un pavage à Achenheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Achenheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier pavage Achenheim/WhatsApp Image 2025-11-26 à 00.57.20_199d6ed8.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier pavage Achenheim/WhatsApp Image 2025-11-26 à 00.57.20_199d6ed8.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Achenheim/WhatsApp Image 2025-11-26 à 00.57.20_59c71195.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Achenheim/WhatsApp Image 2025-11-26 à 00.57.20_5f27c3c5.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Achenheim/WhatsApp Image 2025-11-26 à 00.57.20_ac8e2cec.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Achenheim/WhatsApp Image 2025-11-26 à 00.57.20_d27bff21.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Achenheim/WhatsApp Vidéo 2025-11-26 à 00.57.20_924b8fb8.mp4",
        "type": "video"
    }
],
"location": "Achenheim"
    },
    "proj_21889110": {
"id": "proj_21889110",
"title": "Réalisation d'un pavage à Herlisheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Herlisheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier pavage Herlisaheim/WhatsApp Image 2025-11-26 à 00.28.11_7629d114.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier pavage Herlisaheim/WhatsApp Image 2025-11-26 à 00.28.11_7629d114.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Herlisaheim/WhatsApp Image 2025-11-26 à 00.29.57_0366d2e8.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Herlisaheim/WhatsApp Image 2025-11-26 à 00.29.57_4c6f11f9.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Herlisaheim/WhatsApp Image 2025-11-26 à 00.29.57_5b235f48.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Herlisaheim/WhatsApp Image 2025-11-26 à 00.29.57_90d8b967.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Herlisaheim/WhatsApp Image 2025-11-26 à 00.29.57_929e7df6.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Herlisaheim/WhatsApp Image 2025-11-26 à 00.29.57_edab3f5c.jpg",
        "type": "image"
    }
],
"location": "Herlisheim"
    },
    "proj_11615314": {
"id": "proj_11615314",
"title": "Réalisation d'un pavage à Ittenheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Ittenheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier pavage ittenheim/WhatsApp Image 2025-11-23 à 23.53.57_5e999d36.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier pavage ittenheim/WhatsApp Image 2025-11-23 à 23.53.57_5e999d36.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage ittenheim/WhatsApp Image 2025-11-23 à 23.53.57_8772f628.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage ittenheim/WhatsApp Image 2025-11-23 à 23.53.57_9f7045a0.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage ittenheim/WhatsApp Image 2025-11-23 à 23.53.57_d78cbe15.jpg",
        "type": "image"
    }
],
"location": "Ittenheim"
    },
    "proj_63229494": {
"id": "proj_63229494",
"title": "Réalisation d'un pavage à Neudorf",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Neudorf. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier pavage Neudorf/WhatsApp Image 2025-11-26 à 00.24.48_1106ae86.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier pavage Neudorf/WhatsApp Image 2025-11-26 à 00.24.48_1106ae86.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Neudorf/WhatsApp Image 2025-11-26 à 00.24.48_3510c503.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Neudorf/WhatsApp Image 2025-11-26 à 00.24.48_356feb61.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Neudorf/WhatsApp Image 2025-11-26 à 00.24.48_3b6126c4.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Neudorf/WhatsApp Image 2025-11-26 à 00.24.48_507bec0c.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Neudorf/WhatsApp Image 2025-11-26 à 00.24.48_63f43db8.jpg",
        "type": "image"
    }
],
"location": "Neudorf"
    },
    "proj_74685146": {
"id": "proj_74685146",
"title": "Réalisation d'un pavage à Schiltigheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Schiltigheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Chantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 00.29.57_5a2906f4.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 00.29.57_5a2906f4.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 00.31.26_2c4a5c90.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 00.31.26_d4a69add.jpg",
        "type": "image"
    }
],
"location": "Schiltigheim"
    },
    "proj_27962074": {
"id": "proj_27962074",
"title": "Installation d'une pergola à Altorf",
"category": "amenagement",
"description": "Aménagement extérieur complet à Altorf. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier pergola Altorf/WhatsApp Image 2025-11-25 à 23.55.10_41a45551.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier pergola Altorf/WhatsApp Image 2025-11-25 à 23.55.10_41a45551.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pergola Altorf/WhatsApp Image 2025-11-25 à 23.58.30_693d598d.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pergola Altorf/WhatsApp Image 2025-11-25 à 23.58.30_7b0ed57f.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pergola Altorf/WhatsApp Image 2025-11-25 à 23.58.30_9199ba2c.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier pergola Altorf/WhatsApp Image 2025-11-25 à 23.58.30_b5dc60ac.jpg",
        "type": "image"
    }
],
"location": "Altorf"
    },
    "proj_44881829": {
"id": "proj_44881829",
"title": "Création d'une piscine à Gambsheim",
"category": "piscine",
"description": "Réalisation d'une piscine d'exception à Gambsheim. Intégration parfaite dans l'environnement existant pour un espace de détente unique.",
"thumbnail": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.13_9a73b29e.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.13_9a73b29e.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.14_24743940.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.14_39836da9.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.14_6a84ca71.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.14_74fff46c.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.14_7d68854a.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.14_947b58d0.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Gamsheim/WhatsApp Image 2025-11-23 à 23.51.14_9e3f7853.jpg",
        "type": "image"
    }
],
"location": "Gambsheim"
    },
    "proj_43420054": {
"id": "proj_43420054",
"title": "Création d'une piscine à Strasbourg Centre",
"category": "piscine",
"description": "Réalisation d'une piscine d'exception à Strasbourg. Intégration parfaite dans l'environnement existant pour un espace de détente unique.",
"thumbnail": "assets/images/medias-realisations/Chantier piscine Strasbourg centre/WhatsApp Image 2025-11-26 à 00.18.30_4915680f.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier piscine Strasbourg centre/WhatsApp Image 2025-11-26 à 00.18.30_4915680f.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Strasbourg centre/WhatsApp Image 2025-11-26 à 00.18.30_5815fc7b.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Strasbourg centre/WhatsApp Image 2025-11-26 à 00.18.30_744d28cd.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Strasbourg centre/WhatsApp Image 2025-11-26 à 00.18.30_87d2f907.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Strasbourg centre/WhatsApp Image 2025-11-26 à 00.18.30_92e238cd.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Strasbourg centre/WhatsApp Image 2025-11-26 à 00.18.30_9df43f47.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier piscine Strasbourg centre/WhatsApp Image 2025-11-26 à 00.18.30_a3d2cf0a.jpg",
        "type": "image"
    }
],
"location": "Strasbourg"
    },
    "proj_24540129": {
"id": "proj_24540129",
"title": "Création d'une terrasse en bois exotique à Gambsheim",
"category": "amenagement",
"description": "Aménagement extérieur complet à Gambsheim. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier terrasse bois exotique Gamsheim/WhatsApp Image 2025-11-26 à 00.10.56_0abba976.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier terrasse bois exotique Gamsheim/WhatsApp Image 2025-11-26 à 00.10.56_0abba976.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse bois exotique Gamsheim/WhatsApp Image 2025-11-26 à 00.10.56_0e607f33.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse bois exotique Gamsheim/WhatsApp Image 2025-11-26 à 00.10.56_5541b31c.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse bois exotique Gamsheim/WhatsApp Image 2025-11-26 à 00.10.56_8efa0f16.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse bois exotique Gamsheim/WhatsApp Image 2025-11-26 à 00.10.56_a93b04cb.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse bois exotique Gamsheim/WhatsApp Image 2025-11-26 à 00.10.56_c6925a5d.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse bois exotique Gamsheim/WhatsApp Image 2025-11-26 à 00.10.56_cdded626.jpg",
        "type": "image"
    }
],
"location": "Gambsheim"
    },
    "proj_60278985": {
"id": "proj_60278985",
"title": "Création d'une terrasse en grès cérame à Eschau",
"category": "amenagement",
"description": "Aménagement extérieur complet à Eschau. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.",
"thumbnail": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.24_13211590.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.24_13211590.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.24_9138a81b.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.24_ccb6ce33.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.24_e16daf93.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.25_3cdfb37e.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.25_45c468fe.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.25_4b6ef9b1.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.26_056476d8.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Image 2025-11-26 à 01.12.26_d66875fb.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Chantier terrasse grès cérame Eschau/WhatsApp Vidéo 2025-11-26 à 01.12.26_167c3040.mp4",
        "type": "video"
    }
],
"location": "Eschau"
    },
    "proj_33856983": {
"id": "proj_33856983",
"title": "Création d'un escalier béton coffré à Mittelhausbergen",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Mittelhausbergen. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Création escalier coffrage mittelsofelsheim/WhatsApp Image 2025-11-26 à 01.39.07_7644f34e.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Création escalier coffrage mittelsofelsheim/WhatsApp Image 2025-11-26 à 01.39.07_7644f34e.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Création escalier coffrage mittelsofelsheim/WhatsApp Image 2025-11-26 à 01.39.07_e33bc25f.jpg",
        "type": "image"
    }
],
"location": "Mittelhausbergen"
    },
    "proj_31380937": {
"id": "proj_31380937",
"title": "Réalisation d'un pavage à Schiltigheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Schiltigheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Gantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 01.07.00_e4eade2e.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Gantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 01.07.00_e4eade2e.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Gantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 01.07.01_0f53a0d2.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Gantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 01.07.01_6b4c7456.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Gantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 01.07.01_86c7ddc9.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Gantier pavage Schiltigheim/WhatsApp Image 2025-11-26 à 01.07.01_e568e8ce.jpg",
        "type": "image"
    }
],
"location": "Schiltigheim"
    },
    "proj_40184141": {
"id": "proj_40184141",
"title": "Création d'une rampe en béton à Achenheim",
"category": "maconnerie",
"description": "Travaux de maçonnerie paysagère à Achenheim. Finitions soignées et matériaux de qualité pour des ouvrages durables.",
"thumbnail": "assets/images/medias-realisations/Habituer création  rampe en béton  Achenheim/WhatsApp Image 2025-11-26 à 01.03.35_121c9f80.jpg",
"media": [
    {
        "src": "assets/images/medias-realisations/Habituer création  rampe en béton  Achenheim/WhatsApp Image 2025-11-26 à 01.03.35_121c9f80.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Habituer création  rampe en béton  Achenheim/WhatsApp Image 2025-11-26 à 01.03.35_1b925ce7.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Habituer création  rampe en béton  Achenheim/WhatsApp Image 2025-11-26 à 01.03.35_8a020508.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Habituer création  rampe en béton  Achenheim/WhatsApp Image 2025-11-26 à 01.03.35_991bfec4.jpg",
        "type": "image"
    },
    {
        "src": "assets/images/medias-realisations/Habituer création  rampe en béton  Achenheim/WhatsApp Image 2025-11-26 à 01.03.35_9b38048b.jpg",
        "type": "image"
    }
],
"location": "Achenheim"
    }
};

// Grid Generation
const grid = document.getElementById('realisations-grid');

function renderGrid(filter = 'all') {
    grid.innerHTML = '';
    Object.values(projectData).forEach(project => {
        if (filter === 'all' || project.category === filter) {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-category', project.category);
            card.onclick = () => openRealisationModal(project.id);
            
            const thumb = document.createElement('img');
            thumb.src = project.thumbnail;
            thumb.alt = project.title;
            thumb.className = 'project-img';
            thumb.loading = 'lazy';
            
            const overlay = document.createElement('div');
            overlay.className = 'project-overlay';
            
            const cat = document.createElement('span');
            cat.className = 'project-category';
            cat.textContent = project.category === 'amenagement' ? 'Aménagement' : (project.category === 'piscine' ? 'Piscine' : 'Maçonnerie');
            
            const title = document.createElement('h3');
            title.textContent = project.title;
            
            const loc = document.createElement('p');
            loc.textContent = project.location;
            
            overlay.appendChild(cat);
            overlay.appendChild(title);
            overlay.appendChild(loc);
            
            card.appendChild(thumb);
            card.appendChild(overlay);
            grid.appendChild(card);
        }
    });
}

// Initial Render
renderGrid();

// Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid(btn.getAttribute('data-filter'));
    });
});

// Modal Logic
const modalOverlay = document.getElementById('realisation-modal-overlay');
const modalTitle = document.getElementById('realisation-modal-title');
const modalLocation = document.getElementById('realisation-modal-location');
const modalDesc = document.getElementById('realisation-modal-description');
const mediaWrapper = document.getElementById('realisation-media-wrapper');
const counter = document.getElementById('realisation-media-counter');

let currentProject = null;
let currentMediaIndex = 0;

// Focus management for accessibility
let lastFocusedElement = null;
let focusableElements = [];
let firstFocusableEl = null;
let lastFocusableEl = null;

function generateFallbackDescription(category, location) {
    const templates = {
        'amenagement': `Aménagement extérieur d'exception réalisé à ${location}. Conception sur mesure alliant esthétisme et fonctionnalité pour valoriser votre patrimoine.`,
        'piscine': `Piscine de prestige créée à ${location}. Un espace aquatique élégant qui sublime votre jardin avec des finitions haut de gamme.`,
        'maconnerie': `Travaux de maçonnerie paysagère réalisés à ${location}. Finitions soignées et matériaux de qualité pour des ouvrages durables et esthétiques.`
    };
    return templates[category] || `Réalisation de qualité supérieure à ${location}, conçue avec soin par nos experts.`;
}

function openRealisationModal(projectId) {
    currentProject = projectData[projectId];
    if (!currentProject) return;
    
    currentMediaIndex = 0;
    
    modalTitle.textContent = currentProject.title;
    modalLocation.textContent = currentProject.location;
    
    const description = currentProject.description && currentProject.description.trim() !== '' 
        ? currentProject.description 
        : generateFallbackDescription(currentProject.category, currentProject.location);
    modalDesc.textContent = description;
    
    updateMedia();
    
    modalOverlay.classList.add('is-open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Save currently focused element and move focus to modal
    lastFocusedElement = document.activeElement;
    
    // Get all focusable elements inside modal
    const modal = modalOverlay.querySelector('.realisation-modal');
    focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
        firstFocusableEl = focusableElements[0];
        lastFocusableEl = focusableElements[focusableElements.length - 1];
        
        // Focus on the close button
        const closeBtn = modal.querySelector('.realisation-modal-close');
        if (closeBtn) {
            setTimeout(() => closeBtn.focus(), 50);
        }
    }
}

function closeRealisationModal() {
    modalOverlay.classList.remove('is-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    const video = mediaWrapper.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
    mediaWrapper.innerHTML = '';
    
    // Restore focus to element that opened the modal
    if (lastFocusedElement && lastFocusedElement.focus) {
        setTimeout(() => lastFocusedElement.focus(), 50);
    }
}

function updateMedia() {
    mediaWrapper.innerHTML = '';
    
    const media = currentProject.media[currentMediaIndex];
    
    if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.src;
        video.controls = true;
        video.autoplay = true;
        mediaWrapper.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = media.src;
        img.alt = `${currentProject.title} - ${currentProject.location}`;
        mediaWrapper.appendChild(img);
    }
    
    counter.textContent = `${currentMediaIndex + 1} / ${currentProject.media.length}`;
}

function nextRealisationSlide() {
    if (!currentProject) return;
    currentMediaIndex = (currentMediaIndex + 1) % currentProject.media.length;
    updateMedia();
}

function prevRealisationSlide() {
    if (!currentProject) return;
    currentMediaIndex = (currentMediaIndex - 1 + currentProject.media.length) % currentProject.media.length;
    updateMedia();
}

// Keyboard Support
document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('is-open')) return;
    
    if (e.key === 'Escape') closeRealisationModal();
    if (e.key === 'ArrowRight') nextRealisationSlide();
    if (e.key === 'ArrowLeft') prevRealisationSlide();
    
    // Focus trap: keep Tab navigation within modal
    if (e.key === 'Tab') {
        if (!focusableElements || focusableElements.length === 0) return;
        
        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusableEl) {
                e.preventDefault();
                lastFocusableEl.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastFocusableEl) {
                e.preventDefault();
                firstFocusableEl.focus();
            }
        }
    }
});

// Close on outside click
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeRealisationModal();
});

// Attach event listeners to modal buttons
const closeBtn = document.querySelector('.realisation-modal-close');
const prevBtn = document.querySelector('.gallery-arrow--prev');
const nextBtn = document.querySelector('.gallery-arrow--next');

if (closeBtn) {
    closeBtn.addEventListener('click', closeRealisationModal);
}
if (prevBtn) {
    prevBtn.addEventListener('click', prevRealisationSlide);
}
if (nextBtn) {
    nextBtn.addEventListener('click', nextRealisationSlide);
}

// Expose openRealisationModal to window for project card click handlers
window.openRealisationModal = openRealisationModal;

})();
