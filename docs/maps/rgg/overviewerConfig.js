var overviewerConfig = {
    "CONST": {
        "image": {
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "north_direction": 0,
            "path": "day",
            "base": "",
            "isOverlay": false,
            "maxZoom": 8,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "minZoom": 0,
            "last_rendertime": 1597211779
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true
        },
        "cacheTag": "1597212165",
        "debug": true
    }
};
