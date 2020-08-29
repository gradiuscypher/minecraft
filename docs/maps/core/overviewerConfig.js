var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "map": {
        "debug": true,
        "cacheTag": "1598731285",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "poititle": "Markers",
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "world": "Core01",
            "path": "day",
            "showlocationmarker": true,
            "defaultZoom": 1,
            "isOverlay": false,
            "zoomLevels": 10,
            "last_rendertime": 1598731080,
            "name": "Daytime Render",
            "minZoom": 0,
            "imgextension": "png",
            "bgcolor": "#1a1a1a"
        }
    ]
};
