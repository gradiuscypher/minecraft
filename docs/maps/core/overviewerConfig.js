var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "path": "day",
            "north_direction": 0,
            "imgextension": "png",
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "minZoom": 0,
            "name": "Daytime Render",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1598338680,
            "poititle": "Markers",
            "showlocationmarker": true,
            "world": "Core01",
            "defaultZoom": 1
        }
    ],
    "map": {
        "cacheTag": "1598338888",
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "overlays": true
        },
        "debug": true
    },
    "worlds": [
        "Core01"
    ]
};
