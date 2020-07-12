var overviewerConfig = {
    "tilesets": [
        {
            "path": "day",
            "base": "",
            "poititle": "Markers",
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "isOverlay": false,
            "name": "Daytime Render",
            "minZoom": 0,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "world": "world",
            "last_rendertime": 1594522323,
            "zoomLevels": 8
        }
    ],
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3
    },
    "map": {
        "debug": true,
        "cacheTag": "1594566457",
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "zoom": true
        }
    }
};
