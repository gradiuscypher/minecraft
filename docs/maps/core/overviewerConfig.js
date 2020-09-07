var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "defaultZoom": 1,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "world": "Core01",
            "minZoom": 0,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1599454680,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "base": "",
            "path": "day",
            "imgextension": "png",
            "isOverlay": false
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "pan": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1599454885",
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
