var overviewerConfig = {
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "name": "Daytime Render",
            "base": "",
            "world": "world",
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "last_rendertime": 1596837379,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "path": "day",
            "north_direction": 0
        }
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "zoom": true
        },
        "cacheTag": "1596837762",
        "debug": true,
        "north_direction": "lower-left"
    }
};
