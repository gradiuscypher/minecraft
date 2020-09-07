var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "world": "world",
            "isOverlay": false,
            "showlocationmarker": true,
            "poititle": "Markers",
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
            "base": "",
            "zoomLevels": 8,
            "maxZoom": 8,
            "name": "Daytime Render",
            "imgextension": "png",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "path": "day",
            "defaultZoom": 1,
            "last_rendertime": 1599483379
        }
    ],
    "map": {
        "cacheTag": "1599483769",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "spawn": true,
            "mapType": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "overlays": true
        }
    }
};
