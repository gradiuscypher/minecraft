var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3
    },
    "map": {
        "cacheTag": "1596200482",
        "debug": true,
        "controls": {
            "overlays": true,
            "pan": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "zoomLevels": 10,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "defaultZoom": 1,
            "maxZoom": 10,
            "poititle": "Markers",
            "name": "Daytime Render",
            "path": "day",
            "minZoom": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "north_direction": 0,
            "last_rendertime": 1596200280
        }
    ],
    "worlds": [
        "Core01"
    ]
};
