var overviewerConfig = {
    "CONST": {
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1595109761",
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "compass": true,
            "overlays": true
        },
        "debug": true
    },
    "tilesets": [
        {
            "north_direction": 0,
            "showlocationmarker": true,
            "base": "",
            "zoomLevels": 8,
            "path": "day",
            "name": "Daytime Render",
            "defaultZoom": 1,
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1595109379,
            "imgextension": "png",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "maxZoom": 8
        }
    ],
    "worlds": [
        "world"
    ]
};
