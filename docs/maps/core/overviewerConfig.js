var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "path": "day",
            "name": "Daytime Render",
            "last_rendertime": 1598086680,
            "base": "",
            "zoomLevels": 10,
            "isOverlay": false,
            "north_direction": 0,
            "maxZoom": 10,
            "imgextension": "png",
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01"
        }
    ],
    "map": {
        "cacheTag": "1598086884",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "compass": true,
            "mapType": true,
            "pan": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "Core01"
    ]
};
