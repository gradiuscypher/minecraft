var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "path": "day",
            "isOverlay": false,
            "zoomLevels": 9,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "base": "",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "name": "Daytime Render",
            "poititle": "Markers",
            "north_direction": 0,
            "last_rendertime": 1595653080,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "world": "Core01",
            "imgextension": "png",
            "showlocationmarker": true
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1595653281",
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "Core01"
    ]
};
