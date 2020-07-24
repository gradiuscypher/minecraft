var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "last_rendertime": 1595624179,
            "minZoom": 0,
            "defaultZoom": 1,
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "isOverlay": false,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "path": "day",
            "maxZoom": 8,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1595624631",
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "mapType": true,
            "compass": true,
            "overlays": true,
            "zoom": true,
            "pan": true
        }
    }
};
