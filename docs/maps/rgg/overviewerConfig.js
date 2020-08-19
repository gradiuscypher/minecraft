var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3
    },
    "map": {
        "controls": {
            "compass": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "overlays": true
        },
        "cacheTag": "1597863765",
        "north_direction": "lower-left",
        "debug": true
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "defaultZoom": 1,
            "base": "",
            "imgextension": "png",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "minZoom": 0,
            "isOverlay": false,
            "path": "day",
            "north_direction": 0,
            "poititle": "Markers",
            "maxZoom": 8,
            "last_rendertime": 1597863379
        }
    ]
};
