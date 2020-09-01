var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "map": {
        "debug": true,
        "cacheTag": "1598932969",
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "overlays": true
        }
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
            "isOverlay": false,
            "world": "world",
            "minZoom": 0,
            "maxZoom": 8,
            "name": "Daytime Render",
            "base": "",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "north_direction": 0,
            "path": "day",
            "poititle": "Markers",
            "last_rendertime": 1598932579,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8
        }
    ]
};
