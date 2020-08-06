var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "compass": true,
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true
        },
        "cacheTag": "1596690081",
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "path": "day",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "poititle": "Markers",
            "showlocationmarker": true,
            "world": "Core01",
            "maxZoom": 10,
            "defaultZoom": 1,
            "imgextension": "png",
            "isOverlay": false,
            "base": "",
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1596689880,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0
        }
    ]
};
