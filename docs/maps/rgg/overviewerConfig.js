var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1598706169"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "zoomLevels": 8,
            "isOverlay": false,
            "world": "world",
            "minZoom": 0,
            "imgextension": "png",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "base": "",
            "name": "Daytime Render",
            "north_direction": 0,
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1598705779,
            "defaultZoom": 1
        }
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "tileSize": 384
    }
};
