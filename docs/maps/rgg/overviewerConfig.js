var overviewerConfig = {
    "map": {
        "debug": true,
        "cacheTag": "1599206568",
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "zoom": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true,
            "spawn": true
        }
    },
    "tilesets": [
        {
            "imgextension": "png",
            "path": "day",
            "base": "",
            "zoomLevels": 8,
            "poititle": "Markers",
            "maxZoom": 8,
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "name": "Daytime Render",
            "isOverlay": false,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "last_rendertime": 1599206179,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384
    },
    "worlds": [
        "world"
    ]
};
