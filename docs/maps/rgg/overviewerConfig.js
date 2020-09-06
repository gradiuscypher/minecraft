var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "base": "",
            "minZoom": 0,
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "last_rendertime": 1599404179,
            "name": "Daytime Render",
            "imgextension": "png",
            "isOverlay": false,
            "path": "day",
            "zoomLevels": 8,
            "defaultZoom": 1
        }
    ],
    "map": {
        "controls": {
            "spawn": true,
            "mapType": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599404570"
    },
    "worlds": [
        "world"
    ]
};
