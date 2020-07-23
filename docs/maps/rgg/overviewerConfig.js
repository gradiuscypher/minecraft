var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "minZoom": 0,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "isOverlay": false,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "north_direction": 0,
            "imgextension": "png",
            "base": "",
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1595476579,
            "maxZoom": 8,
            "showlocationmarker": true
        }
    ],
    "map": {
        "cacheTag": "1595476961",
        "controls": {
            "mapType": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
