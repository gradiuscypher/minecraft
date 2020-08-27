var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "defaultZoom": 1,
            "zoomLevels": 10,
            "path": "day",
            "poititle": "Markers",
            "world": "Core01",
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598493480,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "base": "",
            "minZoom": 0,
            "imgextension": "png",
            "showlocationmarker": true,
            "north_direction": 0,
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true
        },
        "cacheTag": "1598493686",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
