var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1597924966"
    },
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "isOverlay": false,
            "imgextension": "png",
            "minZoom": 0,
            "base": "",
            "defaultZoom": 1,
            "north_direction": 0,
            "last_rendertime": 1597924579,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "showlocationmarker": true,
            "world": "world",
            "poititle": "Markers",
            "name": "Daytime Render",
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ]
};
