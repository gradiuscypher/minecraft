var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "map": {
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "mapType": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1595023280"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "showlocationmarker": true,
            "zoomLevels": 9,
            "poititle": "Markers",
            "name": "Daytime Render",
            "last_rendertime": 1595023080,
            "base": "",
            "world": "Core01",
            "north_direction": 0,
            "imgextension": "png",
            "minZoom": 0,
            "isOverlay": false
        }
    ]
};
