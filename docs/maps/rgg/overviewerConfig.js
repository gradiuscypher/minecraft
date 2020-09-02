var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true
        },
        "debug": true,
        "cacheTag": "1599080575"
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "zoomLevels": 8,
            "path": "day",
            "isOverlay": false,
            "showlocationmarker": true,
            "base": "",
            "world": "world",
            "poititle": "Markers",
            "last_rendertime": 1599080179,
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "north_direction": 0,
            "minZoom": 0,
            "imgextension": "png",
            "maxZoom": 8,
            "bgcolor": "#1a1a1a"
        }
    ]
};
