var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "maxZoom": 9,
            "base": "",
            "poititle": "Markers",
            "path": "day",
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "isOverlay": false,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 9,
            "minZoom": 0,
            "last_rendertime": 1594436393,
            "world": "Core01",
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true
        },
        "cacheTag": "1594436882",
        "debug": true
    },
    "worlds": [
        "Core01"
    ]
};
