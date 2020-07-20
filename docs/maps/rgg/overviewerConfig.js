var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "world": "world",
            "path": "day",
            "isOverlay": false,
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "last_rendertime": 1595253379,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "base": "",
            "minZoom": 0,
            "name": "Daytime Render",
            "maxZoom": 8,
            "zoomLevels": 8,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1595253762",
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "overlays": true
        },
        "north_direction": "lower-left"
    }
};
