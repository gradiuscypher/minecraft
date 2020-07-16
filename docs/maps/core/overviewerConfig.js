var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1594857682"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "path": "day",
            "last_rendertime": 1594857479,
            "north_direction": 0,
            "maxZoom": 9,
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "zoomLevels": 9,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "showlocationmarker": true,
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "minZoom": 0,
            "name": "Daytime Render"
        }
    ]
};
