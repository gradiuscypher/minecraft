var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1599271369"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "maxZoom": 8,
            "last_rendertime": 1599270979,
            "poititle": "Markers",
            "imgextension": "png",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "minZoom": 0,
            "isOverlay": false,
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "base": "",
            "defaultZoom": 1
        }
    ]
};
