var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599267686",
        "controls": {
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "zoom": true,
            "coordsBox": true,
            "pan": true
        },
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "path": "day",
            "poititle": "Markers",
            "name": "Daytime Render",
            "isOverlay": false,
            "world": "Core01",
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "defaultZoom": 1,
            "north_direction": 0,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1599267480,
            "zoomLevels": 10,
            "base": ""
        }
    ]
};
