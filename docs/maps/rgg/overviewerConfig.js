var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "last_rendertime": 1598496979,
            "showlocationmarker": true,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "name": "Daytime Render",
            "minZoom": 0,
            "base": "",
            "maxZoom": 8,
            "north_direction": 0,
            "path": "day",
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598497366",
        "controls": {
            "mapType": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true
        }
    }
};
