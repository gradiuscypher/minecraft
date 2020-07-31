var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        }
    },
    "map": {
        "controls": {
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "zoom": true
        },
        "cacheTag": "1596171682",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "world": "Core01",
            "minZoom": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "poititle": "Markers",
            "showlocationmarker": true,
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "north_direction": 0,
            "last_rendertime": 1596171480,
            "maxZoom": 10,
            "base": ""
        }
    ]
};
