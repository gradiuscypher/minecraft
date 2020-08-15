var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "compass": true
        },
        "cacheTag": "1597456963"
    },
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "minZoom": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "world": "world",
            "defaultZoom": 1,
            "maxZoom": 8,
            "showlocationmarker": true,
            "base": "",
            "last_rendertime": 1597456579
        }
    ]
};
