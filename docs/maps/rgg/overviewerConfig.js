var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "base": "",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "isOverlay": false,
            "world": "world",
            "minZoom": 0,
            "last_rendertime": 1594220180,
            "path": "day",
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1594220568",
        "controls": {
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "zoom": true
        }
    }
};
