var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "name": "Daytime Render",
            "isOverlay": false,
            "showlocationmarker": true,
            "last_rendertime": 1599245880,
            "defaultZoom": 1,
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "minZoom": 0,
            "maxZoom": 10,
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "base": "",
            "imgextension": "png"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "controls": {
            "pan": true,
            "spawn": true,
            "compass": true,
            "overlays": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true
        },
        "cacheTag": "1599246086",
        "north_direction": "lower-left"
    }
};
