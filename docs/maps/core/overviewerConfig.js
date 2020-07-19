var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        }
    },
    "tilesets": [
        {
            "zoomLevels": 9,
            "minZoom": 0,
            "base": "",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "maxZoom": 9,
            "last_rendertime": 1595138280,
            "poititle": "Markers",
            "isOverlay": false,
            "defaultZoom": 1,
            "path": "day",
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "overlays": true
        },
        "cacheTag": "1595138483",
        "debug": true,
        "north_direction": "lower-left"
    }
};
