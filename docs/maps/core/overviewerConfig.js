var overviewerConfig = {
    "map": {
        "debug": true,
        "cacheTag": "1596600081",
        "controls": {
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "pan": true
        },
        "north_direction": "lower-left"
    },
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "base": "",
            "imgextension": "png",
            "north_direction": 0,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "maxZoom": 10,
            "showlocationmarker": true,
            "last_rendertime": 1596599880,
            "path": "day",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
