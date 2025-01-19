TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "MUSEO1",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.19,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_71D0655F_7F63_50D9_41A4_3C7572BCE7A1, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_73BE0A0E_7F61_B03B_41D3_C7CA6A73737E",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 9.04,
        "yaw": 70.41,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "width": 80,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.09
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 70.41,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.04,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 301,
           "width": 161,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.09
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 70.41,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 8.2,
      "popupMaxWidth": "95%",
      "rotationY": -2,
      "hideEasing": "cubic_out",
      "id": "popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -5.09
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_95C2B236_8065_7498_41DF_EE17F5AAF6A2, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_710C34DB_7F63_B1DA_41D2_393AB8D56E54",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 10.75,
        "yaw": 79.83,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 165,
           "width": 96,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.58
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 79.83,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.75,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 331,
           "width": 192,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.58
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_6E9F98F8_7FE1_51E7_41D4_DA0C128680EA, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_70662757_7F6F_7029_41DA_3B267E531B32",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 12,
        "yaw": 90.71,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 107,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.81
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 90.71,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 346,
           "width": 215,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.81
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 90.71,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 11.1,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -5.81
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_705D67CE_7F60_B03B_41D9_C28000389442, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_6E9E88F9_7FE1_51D9_41D2_6DEDC7112F98, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_710650E5_7F60_B1EE_41B0_A5106FB778BC",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 13.68,
        "yaw": 103.08,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 178,
           "width": 122,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.77
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 103.08,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.68,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 356,
           "width": 245,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.77
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 103.08,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 12.82,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_705D67CE_7F60_B03B_41D9_C28000389442",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_705D67CE_7F60_B03B_41D9_C28000389442_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -5.77
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_6E9D88F9_7FE1_51D9_41AB_D6EAA7CAC3D7, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_709D18DE_7F63_B1DB_41DC_5C9EDAA7338F",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 12.85,
        "yaw": 116.34,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 174,
           "width": 115,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.66
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 116.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.85,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 349,
           "width": 230,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.66
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 116.34,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 12.09,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -5.66
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_6E6BE908_7FEA_9488_41C0_08B03B690011, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_95CD4238_8065_7488_41D9_3EAE3086223B, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#000000"
       }
      ],
      "id": "overlay_7059D315_7F3F_7029_41B7_DEC89800BB5C",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 11.6,
        "yaw": 128.26,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 166,
           "width": 104,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_5_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.31
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 128.26,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.6,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 333,
           "width": 208,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.31
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_6E9D38FA_7FE1_51DB_41D3_CACAE3CC7978, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_70AC2743_7F21_D029_41DE_6CC8390CABE0",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 9.91,
        "yaw": 138.97,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 156,
           "width": 88,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.76
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 138.97,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.91,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 312,
           "width": 177,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.76
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 138.97,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 9.09,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -4.76
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_6E9C28FB_7FE1_51D9_41C6_B40F41B03092, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_71D9B8CF_7F23_F039_41C7_B9D729F75EB2",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 8.07,
        "yaw": 147.72,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 141,
           "width": 72,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_7_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.14
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 147.72,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.07,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 283,
           "width": 144,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.14
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 147.72,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 7.47,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -4.14
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_70A970A1_7F21_7066_41B9_F70C48D5EC1A, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_6E9B18FB_7FE1_51D9_41D1_8D320D4474E0, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_70FA3A24_7F20_B06F_41B3_EAAA524C747D",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.68,
        "yaw": 58.06,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 47,
           "width": 68,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_8_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.05
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 58.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.68,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 95,
           "width": 137,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.05
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 58.06,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 6.92,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_70A970A1_7F21_7066_41B9_F70C48D5EC1A",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 576,
         "width": 1024,
         "url": "media/popup_70A970A1_7F21_7066_41B9_F70C48D5EC1A_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 0.05
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_6FD72491_7F20_D029_41DB_B2E145A436DE",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.02,
        "yaw": 17.11,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -21.86
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 17.11,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 135,
           "width": 135,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -21.86
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 79.83,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 9.97,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -5.58
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 128.26,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 10.76,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_6E6BE908_7FEA_9488_41C0_08B03B690011",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_6E6BE908_7FEA_9488_41C0_08B03B690011_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -5.31
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702, this.camera_9C0A04AD_8066_9D88_41C5_E460E7AC6F04); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_6FB69325_7FED_94B9_41CD_793E8BB88643",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.94,
        "yaw": -162.59,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_10_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -23.33
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -162.59,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 135,
           "width": 135,
           "url": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -23.33
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_t.jpg"
 },
 {
  "mouseControlMode": "drag_acceleration",
  "buttonMoveLeft": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1201"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 38,
   "height": 38,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1196"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonMoveRight": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1205"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonMoveDown": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1204"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 38,
   "height": 38,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1198"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonZoomOut": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1207"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonMoveUp": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1203"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "touchControlMode": "drag_rotation",
  "buttonRestart": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 38,
   "height": 38,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1195"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "preloadEnabled": false,
  "buttonZoomIn": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "horizontalAlign": "center",
   "cursor": "hand",
   "shadow": false,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1208"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 110,
   "yaw": 16.89,
   "class": "PanoramaCameraPosition",
   "pitch": -5.11
  }
 },
 {
  "id": "panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "MUSEO2",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798, this.camera_9CF5E4A4_8066_9DB8_41D2_6C8249D54CF8); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_70B6C65B_7F20_D0D9_41BA_92B6634C9851",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 3.14,
        "yaw": -91.94,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 31,
           "width": 31,
           "url": "media/panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -26.37
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -91.94,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 62,
           "width": 62,
           "url": "media/panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -26.37
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_99486700_805B_FC78_41D2_02927125CFCA, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_9A1A7BD9_805D_6B88_41D9_9D29DEC83B26, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_99B6750B_805B_9C88_41D3_C206313C1586",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.99,
        "yaw": 31.11,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 63,
           "width": 71,
           "url": "media/panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 5.88
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 31.11,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.99,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 127,
           "width": 143,
           "url": "media/panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 5.88
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 31.11,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 7.29,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_99486700_805B_FC78_41D2_02927125CFCA",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 576,
         "width": 1024,
         "url": "media/popup_99486700_805B_FC78_41D2_02927125CFCA_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 5.88
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_t.jpg"
 },
 {
  "id": "panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 180,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 18.12,
     "yawSpeed": 35.4,
     "easing": "quad_in_out",
     "targetPitch": -2.45,
     "path": "shortest"
    },
    {
     "targetYaw": -112.92,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 18.12,
     "yawSpeed": 35.4,
     "easing": "quart_in_out",
     "targetPitch": -3.45,
     "path": "shortest"
    },
    {
     "targetYaw": -19.97,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "quint_in_out",
     "targetPitch": -3.45,
     "path": "shortest"
    },
    {
     "targetYaw": 39.06,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 19.19,
     "yawSpeed": 37.55,
     "easing": "linear",
     "targetPitch": -3.2,
     "path": "shortest"
    },
    {
     "targetYaw": 89.21,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 18.12,
     "yawSpeed": 35.4,
     "easing": "cubic_in_out",
     "targetPitch": -2.52,
     "path": "shortest"
    }
   ],
   "id": "sequence_707D170F_7FBD_9C89_41D7_57D51A43F6B6",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "repeat": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 89.21,
   "class": "PanoramaCameraPosition",
   "pitch": -2.52
  }
 },
 {
  "id": "panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "AUDITORIO",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F_t.jpg"
 },
 {
  "id": "panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "PASILLO AUD-MUS",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798, this.camera_9DBA35BB_8066_9F88_41C7_EFEC85D09E7E); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_6E5A3415_7FEA_FC98_41B9_F12A9D43B961",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.61,
        "yaw": 94.65,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -29.07
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 94.65,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.61,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 135,
           "width": 135,
           "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -29.07
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9, this.camera_9DA895A1_8066_9FB8_41D8_485BC0625799); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_6E0B73E8_7FE5_9B88_41DF_DB0C2990F084",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 5.73,
        "yaw": -165.45,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 54,
           "width": 54,
           "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -18.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -165.45,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 108,
           "width": 108,
           "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -18.53
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F, this.camera_9D965586_8066_9C78_41C3_D814682CD831); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_6E114865_7FAA_B4B8_41DD_43C05F9923EA",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.59,
        "yaw": -69.46,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -38.39
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -69.46,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.59,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 172,
           "width": 172,
           "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -38.39
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67B89611_6CF0_6B02_41D1_C7874188FF38, this.camera_9D83A56C_8066_9C88_41C8_DB6572E4C74C); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_6DB8EA65_7FAE_94B8_419E_F7C3855B854E",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.15,
        "yaw": 6.44,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.78
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 6.44,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.15,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.78
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_t.jpg"
 },
 {
  "id": "panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "ENTRADA CIAM",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702, this.camera_9CFAB49A_8066_9D88_41D1_C598FC9E6210); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_6D00587A_7FAD_B488_41CB_B842F8450A11",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.11,
        "yaw": -112.39,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -20.79
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -112.39,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -20.79
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_9A63E5EC_80A6_BF88_41D4_E435E9FF1C2A, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_9A1C4BDA_805D_6B88_41D7_25C177762E39, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_993E6765_80A7_9CB8_41D0_F3E9DE349380",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 42.04,
        "yaw": -167.82,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 135,
           "width": 200,
           "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -38.65
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -167.82,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 42.04,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 532,
           "width": 787,
           "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -38.65
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": -167.82,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 46.1,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_9A63E5EC_80A6_BF88_41D4_E435E9FF1C2A",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 576,
         "width": 1024,
         "url": "media/popup_9A63E5EC_80A6_BF88_41D4_E435E9FF1C2A_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -38.65
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_9A4E8746_805A_9CF8_415C_C6F20A8C4C74, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingLeft':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingTop':5,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_9A1F3BDB_805D_6B88_41DF_12E27FAFC857, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_99A35932_80A5_B498_41DE_4B2437ABF6F1",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 90,
        "yaw": 0,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 200,
           "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0
       },
       {
        "hfov": 90,
        "yaw": 90,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 200,
           "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_0_HS_2_2_1_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 0,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 90,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1892,
           "width": 1892,
           "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_0_HS_2_00000.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0
       },
       {
        "hfov": 90,
        "yaw": 90,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1892,
           "width": 1892,
           "url": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_0_HS_2_00001.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": -180,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "hfov": 720,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "id": "popup_9A4E8746_805A_9CF8_415C_C6F20A8C4C74",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 576,
         "width": 1024,
         "url": "media/popup_9A4E8746_805A_9CF8_415C_C6F20A8C4C74_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -0.08
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_t.jpg"
 },
 {
  "id": "panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_67B89611_6CF0_6B02_41D1_C7874188FF38",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "PASILLO1",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702, this.camera_9C1794C0_8066_9DF8_41D7_73B13FD5E8E2); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_6CBF665D_7FA6_BC88_41D1_3464FA8BBCA4",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.87,
        "yaw": 103.66,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.31
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 103.66,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.31
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9, this.camera_9C2C14CA_8066_9D88_41DC_E791989E9AE8); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9521F025_806D_74B8_41D0_C16C2F653BBB",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.18,
        "yaw": -72.7,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.28
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -72.7,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.18,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.28
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA, this.camera_9C0084B7_8066_9D98_41D4_CD635633FFDE); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_948DB6C5_806A_FDF8_41D8_93FC5C9C68F1",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.77,
        "yaw": -139.77,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -27.07
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -139.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -27.07
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_t.jpg"
 },
 {
  "id": "panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "PASILLO 2",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67B89611_6CF0_6B02_41D1_C7874188FF38, this.camera_9C6BE526_8066_9CB8_41D6_21285632DC65); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_95727E9E_807A_ED88_4196_B4B5E4B87822",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.87,
        "yaw": -62.65,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.31
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -62.65,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.31
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.showWindow(this.window_964712E6_807A_95B8_41DC_7D0119AFBADE, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_96B52F8F_807D_AB88_41C6_669D23367A0E",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 15.45,
        "yaw": -19.72,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 71,
           "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -12.75
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -19.72,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.45,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 769,
           "width": 277,
           "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -12.75
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.showWindow(this.window_96C7C7CB_806D_7B89_41D7_0D859F8790A2, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_96FD3139_806A_9488_41DC_6A1C2A12946F",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 12.96,
        "yaw": 17.33,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 72,
           "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -11.37
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 17.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.96,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 639,
           "width": 232,
           "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -11.37
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD, this.camera_9C7F8540_8066_9CF8_41D8_799142774216); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_961461B2_80A7_F798_41D8_A2C15CD663C7",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.54,
        "yaw": 162.95,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -30.59
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 162.95,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -30.59
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_t.jpg"
 },
 {
  "id": "panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "PLAZOLETA",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA, this.camera_9CE55482_8066_9C78_41C3_F51F98D683C4); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_96B44B8F_80A6_AB88_41D5_DC02A99D8896",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.87,
        "yaw": 103.41,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.31
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 103.41,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.31
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9, this.camera_9CE0E48E_8066_9D88_41D0_350F671B6E4E); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_96957C0D_80A5_AC88_41D3_AC9F0442A7CD",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.05,
        "yaw": 10.96,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -22.04
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 10.96,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -22.04
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_t.jpg"
 },
 {
  "id": "panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_camera",
  "initialSequence": {
   "movements": [],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "PASILLO 3",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD, this.camera_9DD10609_8066_9C88_41CB_94B7D685991B); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_973361BC_80AA_9788_41C3_9D7E2FAB266F",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.44,
        "yaw": 95.87,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -32.09
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 95.87,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -32.09
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67B89611_6CF0_6B02_41D1_C7874188FF38, this.camera_9DCC65D5_8066_9F98_41AD_B6081DB92801); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9886EA63_80AB_94B8_41DA_B4D0B799212E",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.89,
        "yaw": 2.67,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.06
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 2.67,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.89,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.06
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_97A9B5FB_80AD_9F88_41A0_CEE28BF42DDB",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.18,
        "yaw": -177.46,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.28
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -177.46,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.18,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.28
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB, this.camera_9DDF35F0_8066_9F98_41C5_437BFB5AE058); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_981217CB_80AF_7B88_41B3_AF80B9F18110",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.2,
        "yaw": -115.91,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -35.36
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -115.91,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -35.36
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_t.jpg"
 },
 {
  "id": "panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "PASILLO 4",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9, this.camera_9C58C50D_8066_9C88_41D5_4EA1CE937596); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_98223C58_80AE_AC88_41B2_620E1AABC7D6",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.96,
        "yaw": -0.6,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -23.8
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -0.6,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -23.8
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44_t.jpg"
 },
 {
  "id": "panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "PRESIDENCIA",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9, this.camera_9C4FA4E8_8066_9D88_41D0_22B199AEDE50); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_98A74EEA_80AD_ED88_41DC_85DC03C15046",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.01,
        "yaw": -1.1,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -22.8
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -1.1,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -22.8
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5, this.camera_9C2344D5_8066_9D98_419E_3E3B65B4894D); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_989DFB3C_80AB_B488_41D8_67265F17BFBB",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.87,
        "yaw": -160.62,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 67,
           "url": "media/panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.31
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -160.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.31
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_t.jpg"
 },
 {
  "id": "panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_67A72DB8_6CF0_9902_41D5_F88E7ABE3DB7",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "IMG_20250113_131228_00_131",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2944,
       "width": 5888,
       "url": "media/panorama_67A72DB8_6CF0_9902_41D5_F88E7ABE3DB7_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_67A72DB8_6CF0_9902_41D5_F88E7ABE3DB7.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_67A72DB8_6CF0_9902_41D5_F88E7ABE3DB7_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_67A72DB8_6CF0_9902_41D5_F88E7ABE3DB7_t.jpg"
 },
 {
  "id": "panorama_67A72DB8_6CF0_9902_41D5_F88E7ABE3DB7_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "REUNIONES",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2944,
       "width": 5888,
       "url": "media/panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB, this.camera_9C4374F1_8066_9D98_41AB_9B34864E23E2); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_993AC3AE_80AA_BB88_41B9_4DE92F2119C9",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.58,
        "yaw": 112.96,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 61,
           "width": 62,
           "url": "media/panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -30.08
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 112.96,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.58,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 123,
           "width": 124,
           "url": "media/panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -30.08
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5_t.jpg"
 },
 {
  "id": "panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5_camera",
  "initialSequence": {
   "movements": [],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_660ACE0C_6CF3_9B03_41D6_F626174B0798_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_676B5D1E_6CF3_F93E_41A2_CB0700364DBE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6742AC35_6CF3_9F02_41C7_6157F8FDF75F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_67D99A62_6CF3_BB07_41D3_9946F9EE3702_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6786F853_6CF3_A705_41CD_1038E51E1DE9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_67B89611_6CF0_6B02_41D1_C7874188FF38",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_67B89611_6CF0_6B02_41D1_C7874188FF38_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_67BD5469_6CF0_6F02_41CB_F251EFB284AA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6783D307_6CF0_A90D_41CB_A866ECCCD5DD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6746F309_6CF0_A905_41D2_B52E7EABADE9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6781D13E_6CF0_E97E_41B0_C6B90F2BCF44_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_67CF9FE8_6CF0_F903_41CF_DBBF01F4A1CB_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_67A72DB8_6CF0_9902_41D5_F88E7ABE3DB7",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_67A72DB8_6CF0_9902_41D5_F88E7ABE3DB7_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_66AC9604_6CF0_AB03_41CD_3D601F70E2F5_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)"
   }
  ]
 },
 "this.popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA",
 {
  "levels": [
   {
    "height": 4000,
    "width": 6000,
    "url": "media/popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2730,
    "width": 4096,
    "url": "media/popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_7253E3BE_7F60_D05B_41BE_AFD0F2D7F7EA_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_71D0655F_7F63_50D9_41A4_3C7572BCE7A1",
  "class": "ImageResource"
 },
 "this.popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B",
 {
  "levels": [
   {
    "height": 4000,
    "width": 6000,
    "url": "media/popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2730,
    "width": 4096,
    "url": "media/popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_6F3CEE19_7FE6_AC88_41C9_A729DA038F6B_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_95C2B236_8065_7498_41DF_EE17F5AAF6A2",
  "class": "ImageResource"
 },
 "this.popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0",
 {
  "levels": [
   {
    "height": 4000,
    "width": 6000,
    "url": "media/popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2730,
    "width": 4096,
    "url": "media/popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_70C0D04F_7F6F_B039_41D9_CB87DC2E2BA0_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_6E9F98F8_7FE1_51E7_41D4_DA0C128680EA",
  "class": "ImageResource"
 },
 "this.popup_705D67CE_7F60_B03B_41D9_C28000389442",
 {
  "levels": [
   {
    "height": 4000,
    "width": 6000,
    "url": "media/popup_705D67CE_7F60_B03B_41D9_C28000389442_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2730,
    "width": 4096,
    "url": "media/popup_705D67CE_7F60_B03B_41D9_C28000389442_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_705D67CE_7F60_B03B_41D9_C28000389442_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_705D67CE_7F60_B03B_41D9_C28000389442_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_705D67CE_7F60_B03B_41D9_C28000389442_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_6E9E88F9_7FE1_51D9_41D2_6DEDC7112F98",
  "class": "ImageResource"
 },
 "this.popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28",
 {
  "levels": [
   {
    "height": 4000,
    "width": 6000,
    "url": "media/popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2730,
    "width": 4096,
    "url": "media/popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_717E3072_7F63_B0EA_41BB_46EC89DCCE28_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_6E9D88F9_7FE1_51D9_41AB_D6EAA7CAC3D7",
  "class": "ImageResource"
 },
 "this.popup_6E6BE908_7FEA_9488_41C0_08B03B690011",
 {
  "levels": [
   {
    "height": 4000,
    "width": 6000,
    "url": "media/popup_6E6BE908_7FEA_9488_41C0_08B03B690011_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2730,
    "width": 4096,
    "url": "media/popup_6E6BE908_7FEA_9488_41C0_08B03B690011_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_6E6BE908_7FEA_9488_41C0_08B03B690011_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_6E6BE908_7FEA_9488_41C0_08B03B690011_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_6E6BE908_7FEA_9488_41C0_08B03B690011_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_95CD4238_8065_7488_41D9_3EAE3086223B",
  "class": "ImageResource"
 },
 "this.popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33",
 {
  "levels": [
   {
    "height": 4000,
    "width": 6000,
    "url": "media/popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2730,
    "width": 4096,
    "url": "media/popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_6F3FAD39_7F21_B066_41CA_1CBBE2CD1D33_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_6E9D38FA_7FE1_51DB_41D3_CACAE3CC7978",
  "class": "ImageResource"
 },
 "this.popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53",
 {
  "levels": [
   {
    "height": 4000,
    "width": 6000,
    "url": "media/popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2730,
    "width": 4096,
    "url": "media/popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_71AE9B06_7F23_502A_41D3_B6B98BA2BA53_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_6E9C28FB_7FE1_51D9_41C6_B40F41B03092",
  "class": "ImageResource"
 },
 "this.popup_70A970A1_7F21_7066_41B9_F70C48D5EC1A",
 {
  "levels": [
   {
    "height": 2252,
    "width": 4000,
    "url": "media/popup_70A970A1_7F21_7066_41B9_F70C48D5EC1A_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1153,
    "width": 2048,
    "url": "media/popup_70A970A1_7F21_7066_41B9_F70C48D5EC1A_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 576,
    "width": 1024,
    "url": "media/popup_70A970A1_7F21_7066_41B9_F70C48D5EC1A_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 288,
    "width": 512,
    "url": "media/popup_70A970A1_7F21_7066_41B9_F70C48D5EC1A_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_6E9B18FB_7FE1_51D9_41D1_8D320D4474E0",
  "class": "ImageResource"
 },
 "this.popup_99486700_805B_FC78_41D2_02927125CFCA",
 {
  "levels": [
   {
    "height": 2252,
    "width": 4000,
    "url": "media/popup_99486700_805B_FC78_41D2_02927125CFCA_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1153,
    "width": 2048,
    "url": "media/popup_99486700_805B_FC78_41D2_02927125CFCA_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 576,
    "width": 1024,
    "url": "media/popup_99486700_805B_FC78_41D2_02927125CFCA_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 288,
    "width": 512,
    "url": "media/popup_99486700_805B_FC78_41D2_02927125CFCA_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_9A1A7BD9_805D_6B88_41D9_9D29DEC83B26",
  "class": "ImageResource"
 },
 "this.popup_9A63E5EC_80A6_BF88_41D4_E435E9FF1C2A",
 {
  "levels": [
   {
    "height": 2252,
    "width": 4000,
    "url": "media/popup_9A63E5EC_80A6_BF88_41D4_E435E9FF1C2A_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1153,
    "width": 2048,
    "url": "media/popup_9A63E5EC_80A6_BF88_41D4_E435E9FF1C2A_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 576,
    "width": 1024,
    "url": "media/popup_9A63E5EC_80A6_BF88_41D4_E435E9FF1C2A_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 288,
    "width": 512,
    "url": "media/popup_9A63E5EC_80A6_BF88_41D4_E435E9FF1C2A_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_9A1C4BDA_805D_6B88_41D7_25C177762E39",
  "class": "ImageResource"
 },
 "this.popup_9A4E8746_805A_9CF8_415C_C6F20A8C4C74",
 {
  "levels": [
   {
    "height": 2252,
    "width": 4000,
    "url": "media/popup_9A4E8746_805A_9CF8_415C_C6F20A8C4C74_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1153,
    "width": 2048,
    "url": "media/popup_9A4E8746_805A_9CF8_415C_C6F20A8C4C74_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 576,
    "width": 1024,
    "url": "media/popup_9A4E8746_805A_9CF8_415C_C6F20A8C4C74_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 288,
    "width": 512,
    "url": "media/popup_9A4E8746_805A_9CF8_415C_C6F20A8C4C74_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_9A1F3BDB_805D_6B88_41DF_12E27FAFC857",
  "class": "ImageResource"
 },
 {
  "headerBorderColor": "#000000",
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "titleFontColor": "#000000",
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "paddingRight": 0,
  "modal": true,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "closeButtonBackgroundColor": [],
  "closeButtonIconColor": "#000000",
  "minHeight": 20,
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "borderRadius": 5,
  "class": "Window",
  "closeButtonIconWidth": 12,
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowSpread": 1,
  "headerBackgroundOpacity": 1,
  "headerPaddingRight": 10,
  "backgroundColorDirection": "vertical",
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "shadowVerticalLength": 0,
  "backgroundColorRatios": [],
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "closeButtonPressedIconLineWidth": 1,
  "horizontalAlign": "center",
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "footerBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "title": "Figura x",
  "closeButtonPressedBorderSize": 0,
  "shadow": true,
  "closeButtonRollOverIconLineWidth": 1,
  "headerPaddingTop": 10,
  "veilColorDirection": "horizontal",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 12,
  "closeButtonRollOverBackgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPaddingLeft": 0,
  "titleFontFamily": "Arial",
  "closeButtonPressedBorderColor": "#000000",
  "children": [
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "height": "32%",
    "width": "100%",
    "minHeight": 0,
    "scrollBarColor": "#000000",
    "paddingTop": 10,
    "class": "HTMLText",
    "scrollBarWidth": 10,
    "paddingLeft": 10,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Esta es la figura XXXX que vivio desde 18XX hasta 19xx.</SPAN></DIV></div>",
    "id": "htmlText_uid9CDAE465_8066_9CB8_41CA_A61C057DB212",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText39404"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": "67%",
    "width": "100%",
    "minHeight": 0,
    "paddingTop": 0,
    "class": "Image",
    "borderRadius": 0,
    "paddingLeft": 0,
    "url": "media/photo_97250FD5_807B_AB98_41DF_DD02CF1BBD3F.jpg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "shadow": false,
    "id": "image_uid9CDAE465_8066_9CB8_41CA_A61C057DB212_1",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image39405"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBorderSize": 0,
  "titleFontStyle": "normal",
  "bodyPaddingTop": 5,
  "scrollBarColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "width": 400,
  "closeButtonPressedBackgroundOpacity": 1,
  "closeButtonPressedIconColor": "#FFFFFF",
  "height": 600,
  "footerBackgroundColorRatios": [
   0,
   0.34,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "titlePaddingRight": 5,
  "titlePaddingBottom": 5,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#000000",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonBackgroundOpacity": 1,
  "layout": "vertical",
  "bodyBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "closeButtonBackgroundColorRatios": [],
  "scrollBarMargin": 2,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "id": "window_964712E6_807A_95B8_41DC_7D0119AFBADE",
  "closeButtonBorderColor": "#000000",
  "data": {
   "name": "Window21861"
  },
  "headerVerticalAlign": "middle",
  "footerBackgroundOpacity": 0.47,
  "headerBorderSize": 0,
  "minWidth": 20,
  "footerBorderSize": 0,
  "bodyPaddingBottom": 5,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonPaddingRight": 0,
  "titleFontWeight": "normal",
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "titleFontSize": 14,
  "closeButtonPaddingTop": 0,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0,
  "bodyBorderSize": 0,
  "closeButtonPaddingBottom": 0
 },
 {
  "headerBorderColor": "#000000",
  "closeButtonPaddingBottom": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "titleFontColor": "#000000",
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "paddingRight": 0,
  "modal": true,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "closeButtonBackgroundColor": [],
  "closeButtonIconColor": "#000000",
  "minHeight": 20,
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "titleTextDecoration": "none",
  "borderRadius": 5,
  "class": "Window",
  "closeButtonIconWidth": 12,
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowSpread": 1,
  "headerBackgroundOpacity": 1,
  "headerPaddingRight": 10,
  "backgroundColorDirection": "vertical",
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "shadowVerticalLength": 0,
  "backgroundColorRatios": [],
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "closeButtonPressedIconLineWidth": 1,
  "horizontalAlign": "center",
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "footerBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "shadow": true,
  "closeButtonRollOverBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "veilColorDirection": "horizontal",
  "title": "Nombre Apelldio",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 12,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPaddingLeft": 0,
  "titleFontFamily": "Arial",
  "closeButtonPressedBorderColor": "#000000",
  "children": [
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "height": "100%",
    "width": "100%",
    "minHeight": 0,
    "scrollBarColor": "#000000",
    "paddingTop": 10,
    "class": "HTMLText",
    "scrollBarWidth": 10,
    "paddingLeft": 10,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Este es el ingeniero XXXX, es famoso por sus grandes obras.</SPAN></DIV></div>",
    "id": "htmlText_uid9CD37468_8066_9C88_41DF_8D419D40C688",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText39406"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBorderSize": 0,
  "closeButtonPressedBackgroundOpacity": 1,
  "bodyPaddingTop": 5,
  "scrollBarColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "width": 400,
  "titleFontStyle": "normal",
  "closeButtonPressedIconColor": "#FFFFFF",
  "height": 600,
  "footerBackgroundColorRatios": [
   0,
   0.34,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "titlePaddingRight": 5,
  "titlePaddingBottom": 5,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#000000",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonBackgroundOpacity": 1,
  "layout": "vertical",
  "bodyBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "closeButtonBackgroundColorRatios": [],
  "scrollBarMargin": 2,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "id": "window_96C7C7CB_806D_7B89_41D7_0D859F8790A2",
  "closeButtonBorderColor": "#000000",
  "data": {
   "name": "Window23392"
  },
  "headerVerticalAlign": "middle",
  "footerBackgroundOpacity": 0.47,
  "headerBorderSize": 0,
  "minWidth": 20,
  "footerBorderSize": 0,
  "bodyPaddingBottom": 5,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonPaddingRight": 0,
  "titleFontWeight": "normal",
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "titleFontSize": 14,
  "closeButtonRollOverIconLineWidth": 1,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0,
  "bodyBorderSize": 0,
  "closeButtonPaddingTop": 0
 },
 {
  "id": "camera_9CE55482_8066_9C78_41C3_F51F98D683C4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9CE0E48E_8066_9D88_41D0_350F671B6E4E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -84.49,
   "class": "PanoramaCameraPosition",
   "pitch": -8.27
  }
 },
 {
  "id": "camera_9CFAB49A_8066_9D88_41D1_C598FC9E6210",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 2.76,
   "class": "PanoramaCameraPosition",
   "pitch": -2.76
  }
 },
 {
  "id": "camera_9CF5E4A4_8066_9DB8_41D2_6C8249D54CF8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 110,
   "yaw": -161.63,
   "class": "PanoramaCameraPosition",
   "pitch": -4.59
  }
 },
 {
  "id": "camera_9C0A04AD_8066_9D88_41C5_E460E7AC6F04",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -75.31,
   "class": "PanoramaCameraPosition",
   "pitch": -11.94
  }
 },
 {
  "id": "camera_9C0084B7_8066_9D98_41D4_CD635633FFDE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 117.55,
   "class": "PanoramaCameraPosition",
   "pitch": -11.02
  }
 },
 {
  "id": "camera_9C1794C0_8066_9DF8_41D7_73B13FD5E8E2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -167.14,
   "class": "PanoramaCameraPosition",
   "pitch": 2.76
  }
 },
 {
  "id": "camera_9C2C14CA_8066_9D88_41DC_E791989E9AE8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 180,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9C2344D5_8066_9D98_419E_3E3B65B4894D",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 0,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9C4FA4E8_8066_9D88_41D0_22B199AEDE50",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 94.59,
   "class": "PanoramaCameraPosition",
   "pitch": -8.27
  }
 },
 {
  "id": "camera_9C4374F1_8066_9D98_41AB_9B34864E23E2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9C58C50D_8066_9C88_41D5_4EA1CE937596",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9C6BE526_8066_9CB8_41D6_21285632DC65",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 87.24,
   "class": "PanoramaCameraPosition",
   "pitch": -9.18
  }
 },
 {
  "id": "camera_9C7F8540_8066_9CF8_41D8_799142774216",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 0,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -144.18,
   "class": "PanoramaCameraPosition",
   "pitch": -6.43
  }
 },
 {
  "id": "camera_9D83A56C_8066_9C88_41C8_DB6572E4C74C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -75.31,
   "class": "PanoramaCameraPosition",
   "pitch": -2.76
  }
 },
 {
  "id": "camera_9D965586_8066_9C78_41C3_D814682CD831",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 6.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_9DA895A1_8066_9FB8_41D8_485BC0625799",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 46.84,
   "class": "PanoramaCameraPosition",
   "pitch": -18.37
  }
 },
 {
  "id": "camera_9DBA35BB_8066_9F88_41C7_EFEC85D09E7E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 110,
   "yaw": 15.61,
   "class": "PanoramaCameraPosition",
   "pitch": -1.84
  }
 },
 {
  "id": "camera_9DCC65D5_8066_9F98_41AD_B6081DB92801",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 105.61,
   "class": "PanoramaCameraPosition",
   "pitch": -5.51
  }
 },
 {
  "id": "camera_9DDF35F0_8066_9F98_41C5_437BFB5AE058",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -90,
   "class": "PanoramaCameraPosition",
   "pitch": -1.84
  }
 },
 {
  "id": "camera_9DD10609_8066_9C88_41CB_94B7D685991B",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 0,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -143.27,
   "class": "PanoramaCameraPosition",
   "pitch": -11.02
  }
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_97250FD5_807B_AB98_41DF_DD02CF1BBD3F_t.jpg",
  "label": "resized_20250113_130745",
  "width": 6000,
  "id": "photo_97250FD5_807B_AB98_41DF_DD02CF1BBD3F",
  "height": 4000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_97250FD5_807B_AB98_41DF_DD02CF1BBD3F.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "duration": 5000
 }
], "children": [
 {
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "borderSize": 0,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "paddingRight": 0,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "minHeight": 50,
  "progressBorderSize": 2,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "shadow": false,
  "playbackBarProgressOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 10,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontColor": "#606060",
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 4,
  "playbackBarHeadShadow": true,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "playbackBarHeadHeight": 30,
  "paddingLeft": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "progressBorderRadius": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 10,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "top": 77,
  "playbackBarHeadWidth": 6,
  "id": "MainViewer",
  "playbackBarBorderRadius": 4,
  "bottom": 92,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "minWidth": 100,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "left": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "progressHeight": 20,
  "right": 0
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "width": 292,
  "height": 49,
  "minHeight": 16,
  "fontSize": 40,
  "fontFamily": "Arial",
  "class": "Label",
  "text": "C.I.V.",
  "textDecoration": "none",
  "borderRadius": 0,
  "paddingTop": 0,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "fontWeight": "bold",
  "top": 14,
  "shadow": false,
  "id": "label4056",
  "backgroundOpacity": 0,
  "data": {
   "name": "Label28174"
  },
  "minWidth": 30,
  "paddingBottom": 0,
  "fontColor": "#666666",
  "left": 73,
  "borderSize": 0
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "width": 38,
      "height": 38,
      "minHeight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "class": "IconButton",
      "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
      "horizontalAlign": "center",
      "cursor": "hand",
      "shadow": false,
      "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
      "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button1199"
      },
      "minWidth": 0,
      "paddingBottom": 0,
      "transparencyActive": false,
      "borderSize": 0
     },
     {
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
       {
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
        ],
        "verticalAlign": "middle",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "scrollBarVisible": "rollOver",
        "paddingRight": 0,
        "height": "100%",
        "width": 47,
        "minHeight": 20,
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "borderRadius": 0,
        "paddingLeft": 0,
        "backgroundColorRatios": [
         0
        ],
        "gap": 10,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "creationPolicy": "delayed",
        "scrollBarWidth": 10,
        "shadow": false,
        "scrollBarMargin": 2,
        "layout": "vertical",
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "backgroundOpacity": 1,
        "data": {
         "name": "Container1202"
        },
        "horizontalAlign": "center",
        "minWidth": 20,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "borderSize": 0,
        "contentOpaque": false,
        "overflow": "hidden"
       },
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
      ],
      "verticalAlign": "middle",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarVisible": "rollOver",
      "paddingRight": 0,
      "height": "100%",
      "width": 133,
      "minHeight": 20,
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "backgroundColorRatios": [
       0
      ],
      "gap": 5,
      "backgroundColorDirection": "vertical",
      "class": "Container",
      "creationPolicy": "delayed",
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1200"
      },
      "horizontalAlign": "center",
      "minWidth": 20,
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "borderSize": 0,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     {
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "verticalAlign": "middle",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarVisible": "rollOver",
      "paddingRight": 0,
      "height": "100%",
      "width": 85,
      "minHeight": 20,
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "backgroundColorRatios": [
       0
      ],
      "gap": 10,
      "backgroundColorDirection": "vertical",
      "class": "Container",
      "creationPolicy": "delayed",
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1206"
      },
      "horizontalAlign": "center",
      "minWidth": 20,
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "borderSize": 0,
      "contentOpaque": false,
      "overflow": "hidden"
     }
    ],
    "verticalAlign": "middle",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarVisible": "rollOver",
    "paddingRight": 0,
    "height": "93.478%",
    "width": 468,
    "minHeight": 20,
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "borderRadius": 0,
    "paddingLeft": 0,
    "backgroundColorRatios": [
     0
    ],
    "gap": 10,
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "backgroundOpacity": 1,
    "data": {
     "name": "Container1194"
    },
    "creationPolicy": "delayed",
    "horizontalAlign": "center",
    "minWidth": 468,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "contentOpaque": false,
    "overflow": "hidden"
   }
  ],
  "verticalAlign": "middle",
  "paddingRight": 0,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "height": 92,
  "minHeight": 1,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "gap": 6,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "width": "100%",
  "creationPolicy": "delayed",
  "shadow": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "horizontalAlign": "center",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container29432"
  },
  "layout": "horizontal",
  "minWidth": 1,
  "paddingBottom": 0,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "height": "8.333%",
  "width": "5.609%",
  "paddingTop": 0,
  "class": "Image",
  "minHeight": 1,
  "borderRadius": 0,
  "paddingLeft": 0,
  "url": "skin/Image_9C09A0BE_806E_9588_41C6_5EC4903C253B.png",
  "horizontalAlign": "center",
  "maxHeight": 395,
  "top": "0%",
  "shadow": false,
  "id": "Image_9C09A0BE_806E_9588_41C6_5EC4903C253B",
  "backgroundOpacity": 0,
  "data": {
   "name": "Image37983"
  },
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "paddingBottom": 0,
  "left": "3.38%",
  "maxWidth": 341,
  "borderSize": 0
 },
 {
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minHeight": 0,
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "UIComponent",
  "backgroundColorRatios": [
   0
  ],
  "top": 0,
  "visible": false,
  "shadow": false,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "data": {
   "name": "UIComponent39407"
  },
  "minWidth": 0,
  "paddingBottom": 0,
  "left": 0,
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "right": 0,
  "borderSize": 0
 },
 {
  "paddingRight": 0,
  "backgroundColor": [],
  "minHeight": 0,
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "ZoomImage",
  "backgroundColorRatios": [],
  "top": 0,
  "visible": false,
  "shadow": false,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "data": {
   "name": "ZoomImage39408"
  },
  "scaleMode": "custom",
  "minWidth": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "borderSize": 0
 },
 {
  "pressedIconColor": "#888888",
  "iconWidth": 20,
  "label": "",
  "iconBeforeLabel": true,
  "verticalAlign": "middle",
  "paddingRight": 5,
  "shadowBlurRadius": 6,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconHeight": 20,
  "fontSize": 12,
  "minHeight": 0,
  "gap": 5,
  "textDecoration": "none",
  "paddingTop": 5,
  "class": "CloseButton",
  "borderRadius": 0,
  "paddingLeft": 5,
  "backgroundColorDirection": "vertical",
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontWeight": "normal",
  "horizontalAlign": "center",
  "shadowSpread": 1,
  "rollOverIconColor": "#666666",
  "top": 10,
  "cursor": "hand",
  "visible": false,
  "shadow": false,
  "iconLineWidth": 5,
  "layout": "horizontal",
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "backgroundOpacity": 0.3,
  "shadowColor": "#000000",
  "data": {
   "name": "CloseButton39409"
  },
  "minWidth": 0,
  "paddingBottom": 5,
  "fontColor": "#FFFFFF",
  "fontStyle": "normal",
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "right": 10,
  "borderSize": 0,
  "iconColor": "#000000"
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "minHeight": 20,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "class": "Player",
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "borderRadius": 0,
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "width": "100%",
 "scrollBarMargin": 2,
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "creationPolicy": "delayed",
 "scrollBarWidth": 10,
 "shadow": false,
 "layout": "absolute",
 "id": "rootPlayer",
 "data": {
  "name": "Player28156"
 },
 "horizontalAlign": "left",
 "minWidth": 20,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "contentOpaque": false,
 "overflow": "visible"
})