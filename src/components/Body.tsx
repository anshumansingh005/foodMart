import React, { ReactElement } from "react";
import RestaurantCard from "./RestaurantCard";

export const Body: React.FC = (): ReactElement => {
  const resConfig = {
    info: {
      id: "997853",
      name: "The Rameshwaram Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/25/52355137-4c0e-4bc6-aab4-b7951e74de51_997853.jpg",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      costForTwo: "₹500 for two",
      cuisines: ["South Indian", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "384316",
      avgRatingString: "4.5",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-06 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-3e5e2b3d-d7d9-4d7a-8974-cf5fdc0272ae",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-rameshwaram-cafe-indiranagar-rest997853",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  };
  return (
    <div className="body">
      <div className="search">Search bar</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};
