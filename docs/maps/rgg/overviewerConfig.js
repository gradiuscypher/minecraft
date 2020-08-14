var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "path": "day",
            "maxZoom": 8,
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "imgextension": "png",
            "north_direction": 0,
            "name": "Daytime Render",
            "base": "",
            "last_rendertime": 1597434979,
            "showlocationmarker": true
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "compass": true
        },
        "cacheTag": "1597435363",
        "debug": true
    }
};
