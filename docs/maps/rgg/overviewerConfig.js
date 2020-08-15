var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "overlays": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true
        },
        "debug": true,
        "cacheTag": "1597474962"
    },
    "tilesets": [
        {
            "north_direction": 0,
            "world": "world",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "name": "Daytime Render",
            "minZoom": 0,
            "zoomLevels": 8,
            "maxZoom": 8,
            "imgextension": "png",
            "isOverlay": false,
            "last_rendertime": 1597474579,
            "base": "",
            "defaultZoom": 1,
            "showlocationmarker": true
        }
    ]
};
