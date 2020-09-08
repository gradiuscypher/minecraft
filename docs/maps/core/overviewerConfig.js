var overviewerConfig = {
    "map": {
        "controls": {
            "spawn": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "zoom": true,
            "compass": true,
            "coordsBox": true
        },
        "cacheTag": "1599559286",
        "north_direction": "lower-left",
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384
    },
    "tilesets": [
        {
            "base": "",
            "path": "day",
            "minZoom": 0,
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "poititle": "Markers",
            "showlocationmarker": true,
            "north_direction": 0,
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1599559080,
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "imgextension": "png"
        }
    ]
};
