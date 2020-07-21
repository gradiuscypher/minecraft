var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png"
        },
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "minZoom": 0,
            "maxZoom": 9,
            "zoomLevels": 9,
            "name": "Daytime Render",
            "poititle": "Markers",
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "isOverlay": false,
            "path": "day",
            "world": "Core01",
            "north_direction": 0,
            "last_rendertime": 1595300280,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "base": ""
        }
    ],
    "map": {
        "cacheTag": "1595300482",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "pan": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true,
            "compass": true
        }
    },
    "worlds": [
        "Core01"
    ]
};
